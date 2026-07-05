# Pictris_web

Support and landing page for **[Pictris](https://apps.apple.com/bg/app/pictris/id6739788238)** — iOS lifestyle app combining photo & video gallery with Tetris-style gameplay and Blogger Mode recording.

[![App Store](https://img.shields.io/badge/App%20Store-available-0D96F6?logo=appstore&logoColor=white)](https://apps.apple.com/bg/app/pictris/id6739788238)
[![HTML](https://img.shields.io/badge/HTML-static%20site-E34F26?logo=html5&logoColor=white)]()

**[Download on App Store](https://apps.apple.com/bg/app/pictris/id6739788238)** · **Live site:** [gromozekapp.github.io/Pictris_web](https://gromozekapp.github.io/Pictris_web/)

---

## About Pictris

Pictris transforms photo and video browsing into an engaging game:

- **Photo Gallery** — classic Tetris over your photos
- **Video Gallery** — vertical videos with sound as the background
- **Blogger Mode** — front camera + gameplay recording with voice and teleprompter
- **PicTris Pro** — optional unlimited Blogger recordings, no watermark
- Meme editor, achievements, gallery filters
- Privacy-first — no ads, no tracking, no accounts

---

## Site Features

- Product landing page with hero, app preview video, and screenshot gallery
- Three play modes, features grid, PicTris Pro section
- Separate privacy policy and about developer pages
- Light / dark theme (system preference)
- SEO meta tags, Open Graph, sitemap, robots.txt
- Responsive layout with mobile navigation
- GitHub Pages hosting

---

## Structure

```
Pictris_web/
├── index.html          # Landing page
├── privacy.html        # Privacy policy
├── about.html          # About the developer
├── css/main.css        # Styles & theme
├── js/
│   ├── theme.js        # Dark/light mode
│   └── main.js         # Navigation, video controls
├── images/
│   ├── hero/           # App icon, brand illustration
│   ├── screenshots/    # App Store promo screenshots
│   ├── pro/            # PicTris Pro promo
│   └── US/...          # App Store badges
├── video/preview.mp4   # App preview video
├── robots.txt
└── sitemap.xml
```

---

## Local Preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

---

## Related

- [Pictris](https://github.com/gromozekapp/Pictris) — iOS app (private repo)
- [App Store](https://apps.apple.com/bg/app/pictris/id6739788238)
