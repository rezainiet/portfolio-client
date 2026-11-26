# Masud Reza · Portfolio

The source for [rezas-portfolio.web.app](https://rezas-portfolio.web.app/). The home page presents selected ecommerce, checkout, and order automation work.

## Local development

```sh
npm ci --legacy-peer-deps
npm start
```

Run the checks with `CI=true npm test -- --watchAll=false`, then build with `npm run build`.

## Content and hosting

- Project cards and their links are defined in `src/App.js`.
- Design tokens and responsive layout are in `src/App.css`.
- Page metadata is in `public/index.html`.
- Firebase Hosting serves `build` and rewrites old app routes to the portfolio page. Deployments require access to the `rezas-portfolio` Firebase project.
- Rio District links show localized product pages. They are not demonstrations of payment completion. ConfirmX has no external link on this page.
