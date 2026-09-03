# CLAUDE.md

Guidance for Claude Code when working on this repository.

## What this project is

Static website for Jesús «Percucello» Vásquez — cellist, music director and cultural manager. No framework, no build step, no backend.

Live at **www.percucello.com** via GitHub Pages (branch `main`).

## Stack

- HTML / CSS / JavaScript vanilla
- GitHub Pages — static hosting, no server
- Formspree — contact form (ID pending configuration)
- Google Fonts (Bricolage Grotesque, Hanken Grotesk, Spectral)

## File structure

```
/
├── index.html                        # Main page (bilingual ES/EN)
├── styles.css                        # Full design system
├── site.js                           # Lang toggle, mobile nav, reveal on scroll
├── image-slot.js                     # Drag-and-drop image component (design prototype artifact)
├── assets/
│   ├── percucello-art.webp           # Hero illustration
│   └── percucello.jpg                # Biography photo
├── projects/
│   ├── centro-cultural-canuto.html
│   ├── el-cello-como-puente.html
│   └── la-vida-suena.html
└── uploads/                          # Additional photos
```

## Branch workflow

| Branch | Purpose |
|---|---|
| `main` | Production — serves www.percucello.com via GitHub Pages |
| `QAPercucello` | Working branch — merge to `main` to publicar |
| `design/updates` | Receives pushes from Claude Design |

**Para publicar:** merge `QAPercucello` → `main` → push `main`.

## Design system

Palette (CSS variables in `styles.css`):
- `--paper` #F4EADA — page background
- `--ink` #221610 — primary text
- `--clay` #BE472A — terracotta / primary accent
- `--petrol` #185A4F — green / CCC project
- `--amber` #E3A12B — gold / highlights
- `--wine` #8C2F4D — La Vida Suena project

Fonts: Bricolage Grotesque (display/headings) · Hanken Grotesk (body) · Spectral (italic quotes)

## Bilingual system

All user-facing text uses `data-es` / `data-en` attributes. `site.js` reads these and swaps content on lang toggle. Language persists in `localStorage`.

When editing content, always update both `data-es` and `data-en`. If a translation is unknown, keep both in Spanish and flag it.

## Pending

- Formspree: replace `REEMPLAZA_ID` in `index.html` form action with real ID from formspree.io
- HTTPS enforcement: blocked by DNS misconfiguration (pending fix by owner)
- Agenda dates: update regularly as new concerts are confirmed

## Local preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

Push to `QAPercucello` triggers GitHub Pages rebuild automatically. No build step needed.

```bash
git checkout QAPercucello
git merge design/updates
git checkout main
git merge QAPercucello
git push origin main
```
