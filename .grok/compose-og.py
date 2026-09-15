#!/usr/bin/env python3
"""Compose the GartenArt OG share card from the real logo + garden scene."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path("/workspace")
BG_PATH = ROOT / "artifacts/imagine_images/7ec963a0-dc82-40e5-8be8-4d18116f3427.jpg"
LOGO_PATH = ROOT / "public/brand/logo.png"
FONT_DISPLAY = ROOT / ".grok/fonts/CormorantGaramond-Bold.ttf"
FONT_SANS = Path("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf")
OUT_RAW = ROOT / ".grok/og-raw.jpg"

FOREST = (0x14, 0x28, 0x1C)
CREAM = (0xF3, 0xEF, 0xE4)
GOLD = (0xC4, 0xA3, 0x5A)

W, H = 1792, 1008


def cover_resize(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    tw, th = size
    s = max(tw / im.width, th / im.height)
    nw, nh = int(round(im.width * s)), int(round(im.height * s))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def darken_scene(photo: Image.Image) -> Image.Image:
    arr = np.asarray(photo.convert("RGB"), dtype=np.float32)
    forest = np.array(FOREST, dtype=np.float32)
    blended = arr * 0.55 + forest * 0.45
    h, w = blended.shape[:2]
    yy, xx = np.ogrid[:h, :w]
    r = np.sqrt(((yy - h / 2) / (h * 0.70)) ** 2 + ((xx - w / 2) / (w * 0.56)) ** 2)
    center = np.clip(1.08 - r, 0, 1) ** 1.25
    dusk = blended * (1.0 - 0.32 * center[..., None])
    edge = np.clip((r - 0.78) / 0.50, 0, 1) ** 1.15
    dusk = dusk * (1.0 - 0.40 * edge[..., None])
    return Image.fromarray(np.clip(dusk, 0, 255).astype(np.uint8), "RGB")


def logo_badge() -> Image.Image:
    logo = Image.open(LOGO_PATH).convert("RGBA")
    a = np.asarray(logo)
    ys, xs = np.where(a[:, :, 3] > 10)
    bbox = (int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1)
    cropped = logo.crop(bbox)
    pad = 14
    size = (cropped.width + pad * 2, cropped.height + pad * 2)
    paper = Image.new("RGBA", size, CREAM + (255,))
    paper.alpha_composite(cropped, (pad, pad))
    return paper


def text_size(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0], box[3] - box[1]


def draw_tracked(draw: ImageDraw.ImageDraw, text: str, xy: tuple[float, float], font, fill, tracking: float):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def main() -> None:
    bg = darken_scene(cover_resize(Image.open(BG_PATH), (W, H)))
    card = bg.convert("RGBA")

    badge = logo_badge()
    badge_h = 500
    badge_w = int(round(badge.width * (badge_h / badge.height)))
    badge = badge.resize((badge_w, badge_h), Image.Resampling.LANCZOS)

    scratch = ImageDraw.Draw(Image.new("RGB", (8, 8)))
    t1, t2, tag = "GartenArt", "& BauProjekte", "GÄRTEN UND BAU IM HOCHTAUNUS"
    display = ImageFont.truetype(str(FONT_DISPLAY), 96)
    sub = ImageFont.truetype(str(FONT_DISPLAY), 58)
    sans = ImageFont.truetype(str(FONT_SANS), 24)
    w1, h1 = text_size(scratch, t1, display)
    w2, h2 = text_size(scratch, t2, sub)
    target = int(W * 0.46)
    scale = target / max(w1, w2)
    display = ImageFont.truetype(str(FONT_DISPLAY), max(56, int(96 * scale)))
    sub = ImageFont.truetype(str(FONT_DISPLAY), max(36, int(58 * scale)))
    w1, h1 = text_size(scratch, t1, display)
    w2, h2 = text_size(scratch, t2, sub)

    tracking = 5.0
    tag_w = sum(scratch.textlength(ch, font=sans) for ch in tag) + tracking * (len(tag) - 1)
    tag_h = text_size(scratch, tag, sans)[1]

    gap_logo_title = 22
    gap_lines = 0
    gap_tag = 22
    rule_h = 2
    lockup_h = badge_h + gap_logo_title + h1 + gap_lines + h2 + gap_tag + rule_h + 14 + tag_h
    top = int((H - lockup_h) / 2) - 6
    cx = W / 2

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shadow = Image.new("RGBA", (badge_w + 56, badge_h + 56), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((10, 16, badge_w + 44, badge_h + 44), radius=8, fill=(6, 10, 6, 150))
    shadow = shadow.filter(ImageFilter.GaussianBlur(16))
    bx = int(cx - badge_w / 2)
    by = top
    layer.alpha_composite(shadow, (bx - 28, by - 20))
    layer.alpha_composite(badge, (bx, by))

    draw = ImageDraw.Draw(layer)
    y = by + badge_h + gap_logo_title
    draw.text((cx - w1 / 2, y), t1, font=display, fill=CREAM + (255,))
    y += h1 + gap_lines
    draw.text((cx - w2 / 2, y), t2, font=sub, fill=GOLD + (255,))
    y += h2 + gap_tag
    rule_w = int(max(w1, w2) * 0.22)
    draw.rectangle((cx - rule_w / 2, y, cx + rule_w / 2, y + rule_h), fill=GOLD + (255,))
    y += rule_h + 14
    draw_tracked(draw, tag, (cx - tag_w / 2, y), sans, GOLD + (210,), tracking)

    frame = ImageDraw.Draw(layer)
    m = 40
    frame.rectangle((m, m, W - m - 1, H - m - 1), outline=GOLD + (130,), width=2)

    out = Image.alpha_composite(card, layer).convert("RGB")
    OUT_RAW.parent.mkdir(parents=True, exist_ok=True)
    out.save(OUT_RAW, "JPEG", quality=92, subsampling=1, optimize=True)
    print("wrote", OUT_RAW, out.size, OUT_RAW.stat().st_size // 1024, "KB")
    print("lockup", dict(top=top, badge=(badge_w, badge_h), title=(w1, h1), sub=(w2, h2), lockup_h=lockup_h, bottom=H - top - lockup_h))


if __name__ == "__main__":
    main()
