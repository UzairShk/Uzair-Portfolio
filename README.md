# Uzair Portfolio

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. Vite is configured with the repository
base path `/Uzair-Portfolio/`.

## GitHub Pages deployment

Deployment is handled by [.github/workflows/deploy.yml](./.github/workflows/deploy.yml).
It builds the Vite application and deploys the `dist/` artifact with GitHub Pages.

The repository Pages setting must be configured once:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main`, or run **Deploy to GitHub Pages** manually from the Actions tab.

Do not select **Deploy from a branch**. That mode serves the repository's development
`index.html` and does not run Vite, which results in a blank page because `/src/main.jsx`
is not a browser-ready production bundle.

The workflow verifies that `dist/index.html` references generated JavaScript and CSS
under `/Uzair-Portfolio/assets/` before publishing. This prevents an invalid production
artifact from being deployed silently.
