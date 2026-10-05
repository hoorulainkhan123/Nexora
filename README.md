# Dev.Zee — React reference build

This starter recreates the uploaded reference's visual direction: near-black canvas, thin borders, oversized editorial typography, neon ambient glows, service cards, marquee motion, and a cinematic vertical video.

## 1) Requirements
- Node.js 18+ (20+ recommended)
- VS Code

## 2) Install and run
```bash
npm install
npm run dev
```
Open the localhost URL Vite prints (usually http://localhost:5173).

Production build:
```bash
npm run build
npm run preview
```

## 3) Folder structure

```text
devzee-react/
├─ public/
│  └─ assets/
│     ├─ hero-model.mp4
│     ├─ agentic-ai.jpg
│     ├─ ecommerce.jpg
│     ├─ web-development.jpg
│     ├─ seo.jpg
│     ├─ data-science.jpg
│     ├─ prompt-engineering.jpg
│     ├─ training.jpg
│     └─ built-around-goal.jpg
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Marquee.jsx
│  │  ├─ Services.jsx
│  │  ├─ About.jsx
│  │  └─ Footer.jsx
│  ├─ data/
│  │  └─ services.js
│  ├─ styles/
│  │  └─ global.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
└─ package.json
```

## 4) Where to edit what

- `src/data/services.js` → service names, descriptions, image file names.
- `src/components/Hero.jsx` → main headline, buttons, hero video.
- `src/components/Navbar.jsx` → navigation and CTA.
- `src/components/About.jsx` → about/approach copy.
- `src/components/Footer.jsx` → final CTA and email.
- `src/styles/global.css` → ALL colors, spacing, typography, glow, cards, responsiveness, animation.
- `public/assets/hero-model.mp4` → uploaded vertical video.
- `public/assets/*.jpg` → uploaded reference images.

## 5) To make it even closer to the reference

1. Keep the background around `#070809`.
2. Use thin `rgba(255,255,255,.10)` borders.
3. Keep text mostly white/grey; use neon only as ambient light.
4. Use very large condensed-feeling headings with tight letter spacing.
5. Preserve the black card overlays so the image text feels embedded into the page.
6. Keep motion subtle: hover scale, reveal-on-scroll, marquee, and video loop.
7. For deployment, run `npm run build` and upload the `dist/` folder to Vercel/Netlify or connect the Git repo.

## 6) Important
The first uploaded video is treated as the **visual reference recording** and is not used as site content. The second uploaded video is copied to `public/assets/hero-model.mp4` and is the actual website video. The 8 images from the uploaded ZIP are copied/renamed into `public/assets/`.
