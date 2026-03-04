# Logo Management Guide
======================

## Folder Structure

```
/public/logos/
├── project_logos/     ← Client / project logos for the carousel
│   ├── Karahi Point.png
│   ├── Drayton Chop House.webp
│   ├── Mr Loop.svg
│   └── ... (any format: .png .jpg .webp .svg)
│
├── brand_logos/       ← Product brand logos for product pages
│   ├── Hobart.png
│   ├── Vulcan.svg
│   └── ... (any format: .png .jpg .webp .svg)
│
└── README.md          ← This file
```

---

## Adding a Project/Client Logo

1. Drop the file into `/public/logos/project_logos/`
   - **Any format works:** `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`
   - Keep the original filename (spaces are fine)

2. Open `lib/clients.ts` and find the client entry

3. Set the `logo` field to the **exact filename** including extension:
   ```ts
   { name: 'Salam Meat', logo: 'Salam Meat.png', abbr: 'SM', color: '...' },
   ```

4. Save — the carousel will now show the real logo instead of the text fallback.

---

## Adding a Brand Logo

1. Drop the file into `/public/logos/brand_logos/`

2. Open `lib/brands.ts` and find the brand entry

3. Set the `logo` field to the exact filename:
   ```ts
   { id: 'hobart', name: 'Hobart', logo: 'Hobart.png' },
   ```

4. Save — all product pages showing that brand will display the logo automatically.

---

## Adding a Brand That Doesn't Exist Yet

1. Add a new entry in `lib/brands.ts`:
   ```ts
   { id: 'mybrand', name: 'My Brand', logo: null },
   ```

2. Reference it by `id` in the relevant product page (`lib/products` or directly in the page file):
   ```ts
   brandIds: ['hobart', 'mybrand'],
   ```

3. Add the logo file and update the entry when available.

---

## Notes

- Logos with `logo: null` automatically show a styled text badge — nothing breaks.
- SVG files are served unoptimized (bypasses Next.js image compression, which is correct for SVGs).
- White-background logos look best in the brand badge (white card background).
- Project logos display on a white card for maximum legibility regardless of logo background.
