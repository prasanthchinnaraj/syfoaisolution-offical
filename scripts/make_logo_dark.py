"""Generate public/logo-dark.png from public/logo.png for light backgrounds.

Recolors low-saturation (white/silver) pixels to deep navy while keeping
the blue brand accents untouched. Run: python scripts/make_logo_dark.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "logo.png"
DST = ROOT / "public" / "logo-dark.png"

DARK = (13, 27, 66)  # deep navy for former white/silver pixels


def main():
    img = Image.open(SRC).convert("RGBA")
    px = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            saturation = max(r, g, b) - min(r, g, b)
            if saturation < 46:  # grayscale-ish pixel (silver/white text)
                lum = (r + g + b) / 765.0
                nr = int(DARK[0] * lum + 10 * (1 - lum))
                ng = int(DARK[1] * lum + 12 * (1 - lum))
                nb = int(DARK[2] * lum + 24 * (1 - lum))
                px[x, y] = (nr, ng, nb, a)

    img.save(DST)
    print(f"Saved {DST} ({w}x{h})")


if __name__ == "__main__":
    main()
