---
title: "About the website"
layout: textlay.njk
excerpt: "About the website."
permalink: /aboutwebsite.html
---

# About this website

This website is built with [Eleventy (11ty)](https://www.11ty.dev) and uses [Bootstrap](http://getbootstrap.com) for layout and styling.

Content pages are written in Markdown with YAML front matter. Data-driven pages (publications, team, research, news) are powered by YAML data files in `src/_data/`. Templates use [Nunjucks](https://mozilla.github.io/nunjucks/).

### Structure

- `src/_data/` — YAML data files for publications, team members, news, research areas, videos
- `src/_includes/layouts/` — page layout templates (Nunjucks)
- `src/_includes/partials/` — reusable components (header, footer, news widget)
- `src/assets/` — CSS (compiled from Sass), JS, images, fonts
- `src/research/` — individual research area pages

### Running locally

```
npm install
npm start
```

The dev server runs at `http://localhost:8080` with live reload.

### Building for production

```
npm run build
```

Output goes to `dist/`.
