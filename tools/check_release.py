#!/usr/bin/env python3
"""Checks the client and server packs are ready to release together.

- Every place that shows the version agrees with CLIENT/manifest.json, and CHANGELOG.md has an entry
  for it.
- The profile image the manifest names exists, and SERVER/server-icon.png is a 64x64 PNG.
- Every config, script, KubeJS and CustomNPCs file that exists on both sides is identical, nothing
  exists only on the server, and Scalpel rules exist on both sides.
- The file list in SERVER/manifest.json (ServerPackCreator's) matches what is on disk. With --fix it
  is rebuilt, keeping ServerPackCreator's order.

Usage: python tools/check_release.py [--fix]
"""
import json
import os
import re
import struct
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
CLIENT = os.path.join(ROOT, "CLIENT")
SERVER = os.path.join(ROOT, "SERVER")
SHARED = ["config", "defaultconfigs", "kubejs", "scripts", "customnpcs"]
BS = "\\"

# File, pattern whose first group is the version
VERSION_PLACES = [
    ("CLIENT/overrides/config/bcc-common.toml", r'^\tmodpackVersion = "([^"]+)"'),
    ("SERVER/config/bcc-common.toml", r'^\tmodpackVersion = "([^"]+)"'),
    ("CLIENT/overrides/config/fancymenu/customization/title_screen_layout.txt", r"^  source = Version (\S+)"),
    ("SERVER/server.properties", r"^motd=.*v(\d+(?:\.\d+)*)"),
]

problems = []


def read(path):
    return open(os.path.join(ROOT, path), "rb").read().decode("utf-8")


def check_version():
    manifest = json.loads(read("CLIENT/manifest.json"))
    version = manifest["version"]
    for path, pattern in VERSION_PLACES:
        found = re.findall(pattern, read(path), re.M)
        if found != [version]:
            problems.append(f"{path} shows {found or 'no version'}, manifest says {version}")
    if f"## [{version}]" not in read("CHANGELOG.md"):
        problems.append(f"CHANGELOG.md has no entry for {version}")
    return manifest


def check_icons(manifest):
    image = os.path.join(CLIENT, manifest.get("image", ""))
    if not manifest.get("image") or not os.path.isfile(image):
        problems.append(f"the manifest's profile image {manifest.get('image')!r} is missing")
    head = open(os.path.join(SERVER, "server-icon.png"), "rb").read(24)
    if head[:8] != b"\x89PNG\r\n\x1a\n" or struct.unpack(">II", head[16:24]) != (64, 64):
        problems.append("SERVER/server-icon.png is not a 64x64 PNG")


def files_under(base):
    out = set()
    for d in SHARED:
        for dp, _, fn in os.walk(os.path.join(base, d)):
            out.update(os.path.relpath(os.path.join(dp, f), base).replace(os.sep, "/") for f in fn)
    return out


def check_sync():
    client_base = os.path.join(CLIENT, "overrides")
    client, server = files_under(client_base), files_under(SERVER)
    for f in sorted(client & server):
        if open(os.path.join(client_base, f), "rb").read() != open(os.path.join(SERVER, f), "rb").read():
            problems.append(f"{f} differs between client and server")
    for f in sorted(server - client):
        problems.append(f"{f} exists only on the server")
    for f in sorted(client - server):
        if f.startswith("config/scalpel/"):
            problems.append(f"{f} is missing on the server; Scalpel refuses joins when rules differ")
    return len(client - server)


def walk(rel):
    """A folder, then its contents in Windows folder order (compared upper-cased), each subfolder before what's in it."""
    out = [rel.replace("/", BS)]
    for name in sorted(os.listdir(os.path.join(SERVER, rel)), key=str.upper):
        child = rel + "/" + name
        out += walk(child) if os.path.isdir(os.path.join(SERVER, child)) else [child.replace("/", BS)]
    return out


def check_server_list(fix):
    path = os.path.join(SERVER, "manifest.json")
    raw = open(path, "rb").read().decode("utf-8")
    listed = json.loads(raw)["files"]
    actual = []
    for d in ["config", "customnpcs", "defaultconfigs", "kubejs"]:
        actual += walk(d)
    mods = os.path.join(SERVER, "mods")
    actual += ["mods" + BS + n for n in sorted(os.listdir(mods), key=str.lower) if os.path.isfile(os.path.join(mods, n))]
    actual += walk("scripts")
    if listed == actual:
        return
    if not fix:
        missing, extra = set(listed) - set(actual), set(actual) - set(listed)
        problems.append(f"SERVER/manifest.json lists {len(missing)} files that are gone and misses {len(extra)}; run with --fix")
        return
    start = raw.index('"files" : [ ') + len('"files" : [ ')
    end = raw.index(" ],", start)
    open(path, "wb").write((raw[:start] + ", ".join(json.dumps(f) for f in actual) + raw[end:]).encode("utf-8"))
    print(f"Rebuilt SERVER/manifest.json: {len(listed)} -> {len(actual)} entries")


def main():
    manifest = check_version()
    check_icons(manifest)
    client_only = check_sync()
    check_server_list("--fix" in sys.argv[1:])
    if problems:
        print("Not ready:")
        for p in problems:
            print("  - " + p)
        sys.exit(1)
    print(f"Ready: version {manifest['version']} everywhere, client and server in sync "
          f"({client_only} client-only files), server pack list matches disk.")


if __name__ == "__main__":
    main()
