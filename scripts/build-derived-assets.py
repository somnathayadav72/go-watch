from pathlib import Path
from shutil import copyfile
from PIL import Image, ImageDraw, ImageFilter
import math

ROOT = Path(__file__).resolve().parents[1]
WATCH_DIR = ROOT / "public/images/watches"
COLLECTION_DIR = ROOT / "public/images/collections"
DETAIL_DIR = ROOT / "public/images/details"
CAMPAIGN_DIR = ROOT / "public/images/campaign"
EXPLODED_DIR = ROOT / "public/images/exploded"

for folder in (COLLECTION_DIR, DETAIL_DIR, CAMPAIGN_DIR, EXPLODED_DIR):
    folder.mkdir(parents=True, exist_ok=True)

collections = {
    "aether": {"base": "#F1E9DC", "accent": "#C7A26A", "ids": ["aether-meridian-38", "aether-halo-36", "aether-solstice-40", "aether-nocturne-39"]},
    "vanta": {"base": "#0E0F12", "accent": "#4B66FF", "ids": ["vanta-null-41", "vanta-shade-40", "vanta-monolith-42", "vanta-eclipse-39"]},
    "tidal": {"base": "#061C2E", "accent": "#0B6B70", "ids": ["tidal-depthline-42", "tidal-breaker-40", "tidal-abyss-43", "tidal-reef-39"]},
    "vector": {"base": "#171717", "accent": "#E23C34", "ids": ["vector-apex-41", "vector-chicane-42", "vector-gridline-40", "vector-redline-43"]},
    "altus": {"base": "#48563A", "accent": "#C1A574", "ids": ["altus-wayfinder-40", "altus-skytrace-41", "altus-altimeter-42", "altus-trailmark-39"]},
    "luma": {"base": "#F7F1E7", "accent": "#B0A1FF", "ids": ["luma-prism-36", "luma-mintline-38", "luma-sunpop-39", "luma-roselight-37"]},
}

def color(value, alpha=255):
    value = value.lstrip("#")
    return tuple(int(value[index:index + 2], 16) for index in (0, 2, 4)) + (alpha,)

def fit_layer(image, target_box, rotate=0):
    layer = image.copy()
    if rotate:
        layer = layer.rotate(rotate, resample=Image.Resampling.BICUBIC, expand=True)
    layer.thumbnail((target_box[2], target_box[3]), Image.Resampling.LANCZOS)
    return layer, (target_box[0] + (target_box[2] - layer.width) // 2, target_box[1] + (target_box[3] - layer.height) // 2)

def save_webp(image, path, quality=92):
    image.save(path, "WEBP", quality=quality, method=6, lossless=False)

# Normalize product renders to the 1800px catalogue contract and provide resilient front assets.
for item in WATCH_DIR.glob("*.webp"):
    if item.name.endswith("-front.webp"):
        continue
    source = Image.open(item).convert("RGBA")
    if source.size != (1800, 1800):
        source = source.resize((1800, 1800), Image.Resampling.LANCZOS)
        save_webp(source, item, 94)
    front = item.with_name(f"{item.stem}-front.webp")
    if not front.exists():
        copyfile(item, front)

# Collection still lifes: original product composites with architectural, light, and instrument motifs.
for name, spec in collections.items():
    canvas = Image.new("RGBA", (1800, 1200), color(spec["base"]))
    draw = ImageDraw.Draw(canvas, "RGBA")
    accent = color(spec["accent"])
    draw.ellipse((260, -360, 1540, 920), outline=accent[:3] + (70,), width=4)
    draw.ellipse((520, -80, 1280, 680), outline=accent[:3] + (105,), width=2)
    for index in range(18):
        x = 80 + index * 100
        draw.line((x, 0, x, 30 + (index % 4) * 25), fill=accent[:3] + (85,), width=2)
    if name == "tidal":
        for y in range(120, 1100, 110):
            points = [(x, y + math.sin(x / 125) * 28) for x in range(0, 1801, 45)]
            draw.line(points, fill=(200, 231, 223, 36), width=4)
    elif name == "altus":
        for index in range(8):
            y = 950 - index * 70
            draw.arc((-200 + index * 40, y - 280, 1600 + index * 90, y + 330), 190, 350, fill=(231, 223, 201, 55), width=3)
    elif name == "luma":
        for fill, box in [("#B0A1FF", (170, 100, 870, 800)), ("#98E0C3", (620, 70, 1380, 830)), ("#F2DC5D", (500, 440, 1240, 1180)), ("#E6909D", (960, 350, 1670, 1060))]:
            draw.ellipse(box, fill=color(fill, 80))
    elif name == "vector":
        for index in range(14):
            draw.line((0, 220 + index * 48, 1800, 220 + index * 48 - index * 12), fill=accent[:3] + (45,), width=3)
    elif name == "vanta":
        draw.rectangle((80, 100, 850, 1080), fill=(41, 44, 49, 150))
        draw.rectangle((950, 0, 1650, 960), fill=(18, 20, 25, 210))
    else:
        draw.rectangle((90, 90, 860, 1110), fill=(255, 255, 255, 50))
        draw.rectangle((1030, 0, 1710, 920), fill=accent[:3] + (40,))
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow, "RGBA")
    shadow_draw.ellipse((340, 930, 1460, 1110), fill=(0, 0, 0, 95))
    shadow = shadow.filter(ImageFilter.GaussianBlur(55))
    canvas.alpha_composite(shadow)
    positions = [(30, 55, 720, 1080, -10), (420, 25, 820, 1130, 5), (960, 70, 700, 1050, -4)]
    for source_id, target in zip(spec["ids"][:3], positions):
        product = Image.open(WATCH_DIR / f"{source_id}.webp").convert("RGBA")
        layer, position = fit_layer(product, target[:4], target[4])
        canvas.alpha_composite(layer, position)
    save_webp(canvas.convert("RGB"), COLLECTION_DIR / f"{name}-collection.webp", 93)

# Macro details derived from the original high-resolution watch renders.
detail_specs = {
    "crown-macro": ("aether-meridian-38", (780, 560, 1540, 1320), "#D8D0C3"),
    "polished-case-edge": ("aether-halo-36", (310, 300, 1250, 1240), "#C6C5C3"),
    "brushed-case-edge": ("vanta-monolith-42", (260, 300, 1250, 1290), "#292C31"),
    "aether-dial-macro": ("aether-meridian-38", (260, 330, 1320, 1390), "#F1E9DC"),
    "vanta-lume-macro": ("vanta-eclipse-39", (300, 300, 1380, 1380), "#0E0F12"),
    "tidal-bezel-macro": ("tidal-depthline-42", (270, 270, 1390, 1390), "#061C2E"),
    "vector-pusher-macro": ("vector-apex-41", (720, 360, 1540, 1180), "#E23C34"),
    "altus-crown-macro": ("altus-skytrace-41", (760, 390, 1540, 1170), "#7599B3"),
    "luma-dial-macro": ("luma-prism-36", (300, 300, 1380, 1380), "#B0A1FF"),
    "bracelet-link-macro": ("aether-halo-36", (390, 20, 1260, 890), "#B8BABD"),
    "leather-stitch-macro": ("aether-nocturne-39", (260, 820, 1140, 1700), "#6B2C32"),
    "movement-macro": ("vanta-shade-40", (340, 340, 1360, 1360), "#292C31"),
}
for output_name, (source_id, crop_box, background) in detail_specs.items():
    source = Image.open(WATCH_DIR / f"{source_id}.webp").convert("RGBA").crop(crop_box)
    source = source.resize((1600, 1200), Image.Resampling.LANCZOS)
    backdrop = Image.new("RGBA", (1600, 1200), color(background))
    backdrop.alpha_composite(source)
    draw = ImageDraw.Draw(backdrop, "RGBA")
    for x in range(0, 1600, 80):
        draw.line((x, 0, x, 18 if x % 320 else 44), fill=(255, 255, 255, 80), width=2)
    save_webp(backdrop.convert("RGB"), DETAIL_DIR / f"{output_name}.webp", 92)

# Editorial campaign artwork based on the six generated collection worlds.
for name, spec in collections.items():
    base = Image.open(COLLECTION_DIR / f"{name}-collection.webp").convert("RGB")
    crop = base.crop((120, 0, 1680, 1200)).resize((1800, 1400), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(crop, "RGBA")
    draw.rectangle((0, 0, 1800, 1400), outline=color(spec["accent"], 120), width=3)
    draw.line((90, 1300, 1710, 1300), fill=color(spec["accent"], 150), width=2)
    save_webp(crop, CAMPAIGN_DIR / f"wrist-{name}.webp", 92)

bench_sources = [
    ("watchshop", "vector", "workshop-hands"),
    ("bench", "aether", "watchmakers-bench"),
    ("room", "vanta", "architectural-time-room"),
]
for mode, collection_name, output_name in bench_sources:
    base = Image.open(COLLECTION_DIR / f"{collection_name}-collection.webp").convert("RGBA").resize((2000, 1200), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(base, "RGBA")
    if mode == "watchshop":
        for index in range(7):
            draw.rounded_rectangle((160 + index * 240, 860 - (index % 2) * 80, 250 + index * 240, 1110), 24, fill=(58, 53, 47, 150))
    elif mode == "bench":
        draw.rectangle((0, 820, 2000, 1200), fill=(84, 58, 39, 170))
        for index in range(13):
            draw.line((120 + index * 145, 830, 60 + index * 145, 1100), fill=(221, 205, 179, 95), width=12)
    else:
        draw.rectangle((70, 80, 640, 1120), outline=(255, 255, 255, 60), width=3)
        draw.rectangle((1360, 0, 1920, 920), outline=(75, 102, 255, 90), width=3)
    save_webp(base.convert("RGB"), CAMPAIGN_DIR / f"{output_name}.webp", 92)

# Polished SVG-fallback-compatible exploded component set.
def transparent_canvas():
    return Image.new("RGBA", (900, 900), (0, 0, 0, 0))

def ring_image(name, outer, inner, stroke, fill=(0, 0, 0, 0), dashed=False):
    image = transparent_canvas()
    draw = ImageDraw.Draw(image, "RGBA")
    if fill[3]:
        draw.ellipse(outer, fill=fill)
    if dashed:
        for angle in range(0, 360, 12):
            rad = math.radians(angle)
            center = 450
            radius = (outer[2] - outer[0]) / 2
            x1, y1 = center + math.cos(rad) * (radius - 28), center + math.sin(rad) * (radius - 28)
            x2, y2 = center + math.cos(rad) * radius, center + math.sin(rad) * radius
            draw.line((x1, y1, x2, y2), fill=stroke, width=8)
    else:
        draw.ellipse(outer, outline=stroke, width=14)
    if inner:
        draw.ellipse(inner, outline=stroke[:3] + (90,), width=4)
    save_webp(image, EXPLODED_DIR / f"{name}.webp", 96)

ring_image("meridian-crystal", (120, 280, 780, 620), (155, 300, 745, 600), (214, 239, 244, 210), (210, 238, 244, 32))
ring_image("meridian-dial", (150, 285, 750, 615), None, (199, 162, 106, 255), (241, 233, 220, 255), True)
ring_image("meridian-chapter-ring", (120, 270, 780, 630), (180, 310, 720, 590), (199, 162, 106, 255), (0, 0, 0, 0), True)
ring_image("meridian-case", (90, 245, 810, 655), (145, 285, 755, 615), (156, 159, 164, 255), (0, 0, 0, 0))
ring_image("meridian-caseback", (120, 265, 780, 635), (230, 330, 670, 570), (119, 122, 128, 255), (31, 33, 37, 210))

hands = transparent_canvas(); hd = ImageDraw.Draw(hands, "RGBA"); hd.line((450, 450, 300, 360), fill=(226, 205, 166, 255), width=18); hd.line((450, 450, 585, 300), fill=(226, 205, 166, 255), width=13); hd.ellipse((432, 432, 468, 468), fill=(199, 162, 106, 255)); save_webp(hands, EXPLODED_DIR / "meridian-hands.webp", 96)
movement = transparent_canvas(); md = ImageDraw.Draw(movement, "RGBA");
for cx, cy, radius in [(450, 450, 230), (350, 420, 95), (545, 390, 82), (505, 520, 72)]:
    md.ellipse((cx-radius,cy-radius,cx+radius,cy+radius), outline=(199,162,106,230), width=12)
    for angle in range(0,360,30):
        rad=math.radians(angle); md.line((cx,cy,cx+math.cos(rad)*radius,cy+math.sin(rad)*radius), fill=(130,120,103,170), width=5)
save_webp(movement, EXPLODED_DIR / "meridian-movement.webp", 96)
crown = transparent_canvas(); cd=ImageDraw.Draw(crown,"RGBA"); cd.rounded_rectangle((280,340,620,560),36,fill=(126,129,134,255),outline=(225,226,227,255),width=12)
for x in range(300,610,22): cd.line((x,350,x,550),fill=(66,68,72,180),width=5)
save_webp(crown,EXPLODED_DIR / "meridian-crown.webp",96)
for side in ("left","right"):
    strap=transparent_canvas(); sd=ImageDraw.Draw(strap,"RGBA"); box=(80,330,720,570) if side=="left" else (180,330,820,570); sd.rounded_rectangle(box,50,fill=(107,44,50,255),outline=(57,25,28,255),width=12)
    for x in range(box[0]+35,box[2]-20,55): sd.line((x,350,x,550),fill=(212,130,136,80),width=3)
    save_webp(strap,EXPLODED_DIR / f"meridian-strap-{side}.webp",96)

# Original ORVYN app icon in raster and ICO formats.
icon = Image.new("RGBA", (512, 512), (9, 10, 12, 255)); draw = ImageDraw.Draw(icon, "RGBA")
draw.ellipse((98, 98, 390, 390), outline=(250, 248, 244, 255), width=28)
draw.line((244, 244, 166, 168), fill=(250, 248, 244, 255), width=24)
draw.line((244, 244, 334, 188), fill=(250, 248, 244, 255), width=20)
draw.ellipse((226, 226, 262, 262), fill=(255, 90, 54, 255))
draw.rectangle((388, 207, 458, 281), outline=(250, 248, 244, 255), width=20)
for line in [((244, 45), (244, 98)), ((244, 390), (244, 467)), ((45, 244), (98, 244))]: draw.line(line, fill=(250, 248, 244, 255), width=22)
icon.save(ROOT / "src/app/favicon.ico", format="ICO", sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
icon.resize((180,180), Image.Resampling.LANCZOS).save(ROOT / "src/app/apple-icon.png", format="PNG")

# Review contact sheet for visual quality control; kept outside public assets.
review_dir = ROOT / "tmp/imagegen"
review_dir.mkdir(parents=True, exist_ok=True)
sheet = Image.new("RGB", (1600, 2400), (232, 228, 220))
all_ids = [source_id for spec in collections.values() for source_id in spec["ids"]]
for index, source_id in enumerate(all_ids):
    product = Image.open(WATCH_DIR / f"{source_id}.webp").convert("RGBA")
    product.thumbnail((380, 380), Image.Resampling.LANCZOS)
    cell = Image.new("RGBA", (400, 400), (244, 241, 235, 255))
    cell.alpha_composite(product, ((400-product.width)//2, (400-product.height)//2))
    sheet.paste(cell.convert("RGB"), ((index % 4) * 400, (index // 4) * 400))
save_webp(sheet, review_dir / "watch-contact-sheet.webp", 90)

print("Built normalized product renders, collection worlds, macro details, campaign artwork, exploded components, and app icons.")
