# Aniketh Alladi — Portfolio

Premium single-page portfolio built with React, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Customising

- **Content** lives in `src/data/` (`site.js`, `skills.js`, `projects.js`). Edit those files; no component changes needed.
- **Images**: drop project screenshots and a profile photo into `public/assets/`, then set the `image` field in `src/data/projects.js` and the profile image in `src/data/site.js`.
- **Colors** are defined once in `tailwind.config.js`.
