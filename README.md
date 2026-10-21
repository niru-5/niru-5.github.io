# niru-5.github.io

Single-page portfolio. Plain HTML/CSS/JS, no build step.

## Files
- `index.html`: all copy, in commented sections (HERO, 01 WHY ME … 06 CONTACT). Edit text there.
- `styles.css`: layout and theme tokens (accent colour = `--accent` at the top).
- `main.js`: theme toggle, fade-in on scroll, lazy video autoplay.
- `assets/`: replace these placeholder files, keeping the names:
  - `img/profile.jpg` (profile photo), `img/chess-poster.jpg` (video poster),
    `img/esp32-v1.jpg`, `img/esp32-v2.jpg` (ESP32 iterations), `img/og-preview.png` (1200x630 social preview)
  - `video/chess.mp4` (chess demo), `cv.pdf` (CV, copied from your resume build)

## Placeholders
Search for `PLACEHOLDER` in `index.html`. Each is shown with a yellow highlight (class `ph`);
remove the `ph` span when you fill it in. Email appears in two `mailto:` links, LinkedIn in two `href`s.

## Swap the video
- Self-hosted: drop an H.264 `chess.mp4` into `assets/video/` (keep it small, ideally under ~10 MB). It loads
  and plays muted when scrolled into view.
- YouTube: delete the `<video>` in card 1 and uncomment the `<iframe>` block just below it, setting `VIDEO_ID`.

## Deploy
Push to the `main` branch of the `niru-5/niru-5.github.io` repo; Pages serves it at https://niru-5.github.io/
(Settings → Pages → Deploy from branch → `main` / root).

## Preview locally
`python3 -m http.server` in this folder, then open http://localhost:8000
