// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages preview lives at irving1211.github.io/mia-beauty-boutique/.
// When miabeautyboutique.com cuts over, drop `base` and switch `site` back.
export default defineConfig({
  site: 'https://irving1211.github.io',
  base: '/mia-beauty-boutique/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  server: {
    host: '0.0.0.0',
    port: 4323,
    allowedHosts: true,
  },
  vite: { server: { allowedHosts: true } },
});
