#!/usr/bin/env python3
"""Animated icon for Apocalypse Begins Legacy, stamped with the current modpack version.

The night shot of the zombie crowd and its reflection in the building glass (src/base.webp) sits
under blocky pixel letters and a red border. The loop: the street lamps flicker and die, the city
goes dark, red eyes open on the crowd and then in the reflection, the version number fades in
while the border pulses, then the power comes back and the loop starts again.

Writes to out/<version>/: icon.webp (animated, 400x400), icon.gif (fallback, half the frame rate),
still.png and still_dark.png (one lit and one dark frame), sheet.png (eight moments of the loop),
preview_64.png (the lit and dark frames as small thumbnails, enlarged), static.png (the lit frame
with the version showing, 800x800) and server-icon.png (the same, 64x64, the only size and format a
server list accepts).

With --place it also copies them into the pack: CLIENT/profileImage/icon.webp and icon.png, and
SERVER/server-icon.png.

Usage: python make_icon.py [version, default the one in CLIENT/manifest.json] [--place]
"""
import json
import math
import os
import random
import shutil
import sys

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(HERE, "src", "base.webp")
ROOT = os.path.join(HERE, "..", "..")
MANIFEST = os.path.join(ROOT, "CLIENT", "manifest.json")
ARGS = [a for a in sys.argv[1:] if not a.startswith("--")]
PLACE = "--place" in sys.argv[1:]

SIZE = 400            # output edge
WORK = 800            # render edge (downscaled at the end for clean edges)
FPS = 15
SECONDS = 5.2
FRAMES = int(FPS * SECONDS)

# Line, cell size and colour, top to bottom
WHITE = (255, 255, 255)
OUTLINE = (12, 14, 22)
RED = (235, 28, 28)
TITLE = [("APOCALYPSE", 10, WHITE), ("BEGINS", 11, WHITE), ("LEGACY", 13, RED)]
TITLE_TOP = 26
VERSION_CELL = 9      # shrinks to fit long version numbers
BORDER = 22

SHIFT = 60            # the scene sits this far down, so the title clears the lamps
FADE_END = 480        # the blur and darkening behind the title are gone by this row

# Positions below are pixels in the 1009x1009 source
# x, y, radius, second it dies
LAMPS = [(250, 367, 70, 1.15), (325, 345, 50, 1.35), (487, 380, 75, 1.75), (618, 350, 50, 1.45), (715, 375, 70, 1.25)]
EYES_CROWD = [(141, 600), (252, 609), (296, 598), (389, 613), (184, 633), (225, 667), (145, 865), (270, 880)]
EYES_REFLECTION = [(669, 621), (723, 640), (763, 708), (809, 679), (865, 647)]
REFLECTION_X = 590    # the source's reflection starts about here

# 6x7 bold glyphs, two-pixel strokes
GLYPHS = {
    "A": [".####.", "##..##", "##..##", "######", "##..##", "##..##", "##..##"],
    "B": ["#####.", "##..##", "##..##", "#####.", "##..##", "##..##", "#####."],
    "C": [".#####", "##....", "##....", "##....", "##....", "##....", ".#####"],
    "E": ["######", "##....", "##....", "#####.", "##....", "##....", "######"],
    "G": [".#####", "##....", "##....", "##.###", "##..##", "##..##", ".#####"],
    "I": ["######", "..##..", "..##..", "..##..", "..##..", "..##..", "######"],
    "L": ["##....", "##....", "##....", "##....", "##....", "##....", "######"],
    "N": ["##..##", "###.##", "######", "##.###", "##..##", "##..##", "##..##"],
    "O": [".####.", "##..##", "##..##", "##..##", "##..##", "##..##", ".####."],
    "P": ["#####.", "##..##", "##..##", "#####.", "##....", "##....", "##...."],
    "S": [".#####", "##....", "##....", ".####.", "....##", "....##", "#####."],
    "Y": ["##..##", "##..##", "##..##", ".####.", "..##..", "..##..", "..##.."],
    "0": [".####.", "##..##", "##.###", "######", "###.##", "##..##", ".####."],
    "1": ["..##..", ".###..", "..##..", "..##..", "..##..", "..##..", "######"],
    "2": [".####.", "##..##", "....##", "...##.", "..##..", ".##...", "######"],
    "3": ["#####.", "....##", "....##", ".####.", "....##", "....##", "#####."],
    "4": ["...###", "..####", ".##.##", "##..##", "######", "....##", "....##"],
    "5": ["######", "##....", "#####.", "....##", "....##", "##..##", ".####."],
    "6": [".####.", "##....", "##....", "#####.", "##..##", "##..##", ".####."],
    "7": ["######", "....##", "...##.", "..##..", "..##..", "..##..", "..##.."],
    "8": [".####.", "##..##", "##..##", ".####.", "##..##", "##..##", ".####."],
    "9": [".####.", "##..##", "##..##", ".#####", "....##", "....##", ".####."],
    ".": ["..", "..", "..", "..", "..", "##", "##"],
}


def read_version():
    """The version from the command line, otherwise from the client manifest; digits and dots only."""
    if ARGS:
        version = ARGS[0]
    else:
        with open(MANIFEST, encoding="utf-8-sig") as f:
            version = json.load(f)["version"]
    if not version or any(ch not in "0123456789." for ch in version):
        sys.exit(f"Can't draw version {version!r}: only digits and dots have glyphs")
    return version


def text_mask(text):
    """Glyph cells for a line of text, one cell apart, as a set of (x, y)."""
    cells, x = set(), 0
    for ch in text:
        g = GLYPHS[ch]
        for y, row in enumerate(g):
            for gx, c in enumerate(row):
                if c == "#":
                    cells.add((x + gx, y))
        x += len(g[0]) + 1
    return cells, x - 1, 7


def draw_text(img, text, cell, top, fill, glow=None):
    """Pixel letters with a one-cell dark outline and a drop shadow, centred; returns the next line's top."""
    cells, w, h = text_mask(text)
    outline = {(x + dx, y + dy) for x, y in cells for dx in (-1, 0, 1) for dy in (-1, 0, 1)}
    shadow = {(x + 1, y + 1) for x, y in outline}
    left = WORK // 2 - (w * cell) // 2

    def paint(d, points, colour):
        for x, y in points:
            x0, y0 = left + x * cell, top + y * cell
            d.rectangle([x0, y0, x0 + cell - 1, y0 + cell - 1], fill=colour)

    if glow:
        halo = Image.new("RGBA", img.size, (0, 0, 0, 0))
        paint(ImageDraw.Draw(halo), cells, glow + (190,))
        img.alpha_composite(halo.filter(ImageFilter.GaussianBlur(cell * 2.2)))
    d = ImageDraw.Draw(img)
    paint(d, shadow - outline, (0, 0, 0, 140))
    paint(d, outline, OUTLINE + (255,))
    paint(d, cells, fill + (255,))
    return top + h * cell


def to_work(x, y):
    """Source pixel to its place in the shifted render."""
    return int(x * WORK / 1009), int(y * WORK / 1009) + SHIFT


def eye_layer(points):
    """Pairs of red squares with a bloom, on black, to be added over a frame."""
    layer = Image.new("RGB", (WORK, WORK))
    d = ImageDraw.Draw(layer)
    for x, y in points:
        cx, cy = to_work(x, y)
        d.rectangle([cx - 8, cy - 3, cx - 3, cy + 3], fill=(255, 30, 30))
        d.rectangle([cx + 3, cy - 3, cx + 8, cy + 3], fill=(255, 30, 30))
    return ImageChops.add(layer, layer.filter(ImageFilter.GaussianBlur(14)).point(lambda v: min(255, int(v * 3.2))))


def smooth(t):
    t = min(max(t, 0.0), 1.0)
    return t * t * (3 - 2 * t)


def fade_layer(layer, alpha):
    faded = layer.copy()
    faded.putalpha(faded.getchannel("A").point(lambda a: int(a * alpha)))
    return faded


def scene():
    """The shot lifted out of the dark, moved down under the title, with the reflection brightened."""
    src = Image.open(SOURCE).convert("RGB").resize((WORK, WORK), Image.LANCZOS)
    src = src.point(lambda v: int(255 * (v / 255) ** 0.72))
    src = ImageEnhance.Color(ImageEnhance.Contrast(src).enhance(1.12)).enhance(1.18)
    edge = to_work(REFLECTION_X, 0)[0]
    ramp = Image.new("L", (WORK, 1))
    ramp.putdata([int(255 * min(max((x - edge) / 50, 0), 1)) for x in range(WORK)])
    src = Image.composite(ImageEnhance.Brightness(src).enhance(1.3), src, ramp.resize((WORK, WORK)))
    base = Image.new("RGB", (WORK, WORK))
    base.paste(src.crop((0, 0, WORK, 2)).resize((WORK, SHIFT + 2)).filter(ImageFilter.GaussianBlur(8)), (0, 0))
    base.paste(src, (0, SHIFT))
    return base


def main():
    version = read_version()
    out = os.path.join(HERE, "out", version)
    os.makedirs(out, exist_ok=True)

    base = scene()
    black = Image.new("RGB", (WORK, WORK))

    # Blackout version: highlights capped so dead lamps don't stay bright, everything dim and blue
    r, g, b = base.split()
    dark = Image.merge("RGB", (r.point(lambda v: int(min(v, 110) * 0.24)), g.point(lambda v: int(min(v, 110) * 0.28)), b.point(lambda v: int(min(v, 110) * 0.42))))

    # Each lamp's light: the bright parts of the shot inside its circle, and its bloom
    lights = base.convert("L").point(lambda v: 0 if v < 150 else min(255, (v - 150) * 4)).filter(ImageFilter.GaussianBlur(2))
    lamps = []
    for x, y, radius, dies in LAMPS:
        cx, cy = to_work(x, y)
        rad = int(radius * WORK / 1009)
        mask = Image.new("L", (WORK, WORK), 0)
        ImageDraw.Draw(mask).ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=255)
        mask = ImageChops.multiply(mask, lights)
        lamps.append((mask, Image.composite(base, black, mask).filter(ImageFilter.GaussianBlur(26)), dies))

    eyes_crowd, eyes_reflection = eye_layer(EYES_CROWD), eye_layer(EYES_REFLECTION)

    # Blur and darken behind the title, fading out down the frame; the crowd stays sharp
    fade = Image.new("L", (WORK, WORK), 0)
    fade.paste(Image.linear_gradient("L").resize((WORK, FADE_END)).point(lambda v: 255 - v), (0, 0))

    def behind_title(img):
        img = Image.composite(img.filter(ImageFilter.GaussianBlur(7)), img, fade)
        return Image.composite(black, img, fade.point(lambda v: int(v * 0.62)))

    lit_scene, dark_scene = behind_title(base), behind_title(dark)
    vignette = Image.radial_gradient("L").resize((WORK, WORK)).point(lambda v: int(255 - v * 0.3))

    title = Image.new("RGBA", (WORK, WORK), (0, 0, 0, 0))
    y = TITLE_TOP
    for k, (line, cell, colour) in enumerate(TITLE):
        y += cell if k else 0  # the outline needs a cell of room
        y = draw_text(title, line, cell, y, colour, glow=RED if colour == RED else None)

    # Version: as large as fits inside the border, resting just above it
    cell = min(VERSION_CELL, (WORK - 2 * BORDER - 40) // (text_mask(version)[1] + 3))
    version_layer = Image.new("RGBA", (WORK, WORK), (0, 0, 0, 0))
    draw_text(version_layer, version, cell, WORK - BORDER - 8 - 9 * cell, WHITE)

    rng = random.Random(7)
    flicker = [[rng.random() for _ in range(FRAMES)] for _ in LAMPS]

    def render(i, shown=None):
        """Frame i of the loop at render size; shown overrides how visible the version is."""
        t = i / FRAMES * SECONDS

        # The city dims as a whole (1.2 s to 2.0 s, back 4.4 s to 5.0 s)
        darkness = smooth((t - 1.2) / 0.8) * (1 - smooth((t - 4.4) / 0.6))
        frame = Image.composite(lit_scene, dark_scene, Image.new("L", (WORK, WORK), int(255 * (1 - darkness))))

        # Lamps flicker before they die, and again as the power returns, one after another
        for n, (mask, bloom, dies) in enumerate(lamps):
            back = 4.35 + n * 0.08
            level = 1.0
            if dies - 0.45 < t < dies:
                level = 0.3 if flicker[n][i] < 0.5 else 1.0
            elif dies <= t < back:
                level = 0.0
            elif back <= t < back + 0.4:
                level = 0.25 if flicker[n][i] < 0.45 else 1.0
            if level:
                frame = Image.composite(lit_scene, frame, mask.point(lambda v: int(v * level)))
                frame = ImageChops.add(frame, bloom.point(lambda v: min(255, int(v * 1.6 * level))))

        # Eyes open on the crowd, then the reflection answers
        closing = 1 - smooth((t - 4.3) / 0.25)
        for layer, opening in ((eyes_crowd, 2.0), (eyes_reflection, 2.6)):
            eyes = smooth((t - opening) / 0.35) * closing
            if eyes > 0:
                frame = ImageChops.add(frame, layer.point(lambda v: int(v * eyes)))

        frame = Image.composite(frame, black, vignette).convert("RGBA")
        frame.alpha_composite(title)

        if shown is None:
            shown = smooth((t - 2.7) / 0.4) * (1 - smooth((t - 4.2) / 0.3))
        if shown > 0.01:
            frame.alpha_composite(fade_layer(version_layer, shown))

        # The border is the last light on: it pulses in the dark
        pulse = 0.5 + 0.5 * math.sin(2 * math.pi * t / 1.05)
        red = int(255 * (1 - darkness * 0.38 * (1 - pulse)))
        ImageDraw.Draw(frame).rectangle([0, 0, WORK - 1, WORK - 1], outline=(red, 0, 0, 255), width=BORDER)
        return frame.convert("RGB")

    frames = [render(i).resize((SIZE, SIZE), Image.LANCZOS) for i in range(FRAMES)]

    # Places that show a single image get the lit opening frame with the version showing
    static = render(0, shown=1.0)
    static.save(os.path.join(out, "static.png"))
    static.resize((64, 64), Image.LANCZOS).save(os.path.join(out, "server-icon.png"))

    lit, blackout = frames[0], frames[int(3.6 * FPS)]
    lit.save(os.path.join(out, "still.png"))
    blackout.save(os.path.join(out, "still_dark.png"))
    sheet = Image.new("RGB", (SIZE * 4 // 2, SIZE * 2 // 2))
    for k, sec in enumerate((0.3, 1.3, 1.9, 2.4, 3.0, 3.8, 4.5, 4.9)):
        sheet.paste(frames[int(sec * FPS)].resize((SIZE // 2, SIZE // 2)), ((k % 4) * SIZE // 2, (k // 4) * SIZE // 2))
    sheet.save(os.path.join(out, "sheet.png"))
    preview = Image.new("RGB", (512, 256))
    for k, frame in enumerate((lit, blackout)):
        preview.paste(frame.resize((64, 64), Image.LANCZOS).resize((256, 256), Image.NEAREST), (k * 256, 0))
    preview.save(os.path.join(out, "preview_64.png"))
    frames[0].save(os.path.join(out, "icon.webp"), save_all=True, append_images=frames[1:],
                   duration=int(1000 / FPS), loop=0, quality=82, method=6)
    gif = frames[::2]
    gif[0].save(os.path.join(out, "icon.gif"), save_all=True, append_images=gif[1:],
                duration=int(2000 / FPS), loop=0, optimize=True)
    for f in ("icon.webp", "icon.gif"):
        print(os.path.join(out, f), os.path.getsize(os.path.join(out, f)) // 1024, "KB")

    if PLACE:
        for name, target in (("icon.webp", "CLIENT/profileImage/icon.webp"), ("static.png", "CLIENT/profileImage/icon.png"),
                             ("server-icon.png", "SERVER/server-icon.png")):
            shutil.copyfile(os.path.join(out, name), os.path.join(ROOT, target))
            print("placed", target)


if __name__ == "__main__":
    main()
