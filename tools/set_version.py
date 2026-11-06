#!/usr/bin/env python3
"""Sets the modpack version everywhere it appears, then makes and places the icons for it.

Changes CLIENT/manifest.json, Better Compatibility Checker on the client and the server (the two
must match or players can't join), and the "Version" line on the FancyMenu title screen. Then runs
icon/make_icon.py --place, which reads the new version from the manifest. CHANGELOG.md stays manual.

Usage: python tools/set_version.py <version>
"""
import os
import re
import subprocess
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")

# File, pattern whose second group is the version, how many times it must match
PLACES = [
    ("CLIENT/manifest.json", r'^(    "version": ")([^"]+)(")', 1),
    ("CLIENT/overrides/config/bcc-common.toml", r'^(\tmodpackVersion = ")([^"]+)(")', 1),
    ("SERVER/config/bcc-common.toml", r'^(\tmodpackVersion = ")([^"]+)(")', 1),
    ("CLIENT/overrides/config/fancymenu/customization/title_screen_layout.txt", r"^(  source = Version )(\S+)()", 1),
]


def main():
    if len(sys.argv) != 2 or not re.fullmatch(r"\d+(\.\d+)*", sys.argv[1]):
        sys.exit("Usage: python tools/set_version.py <version>, digits and dots only")
    version = sys.argv[1]
    for path, pattern, count in PLACES:
        full = os.path.join(ROOT, path)
        text = open(full, "rb").read().decode("utf-8")
        found = re.findall(pattern, text, re.M)
        if len(found) != count:
            sys.exit(f"{path}: expected {count} version line, found {len(found)}; nothing after this was changed")
        text = re.sub(pattern, lambda m: m.group(1) + version + m.group(3), text, flags=re.M)
        open(full, "wb").write(text.encode("utf-8"))
        print(f"{path}: {found[0][1]} -> {version}")
    subprocess.run([sys.executable, os.path.join(ROOT, "tools", "icon", "make_icon.py"), "--place"], check=True)


if __name__ == "__main__":
    main()
