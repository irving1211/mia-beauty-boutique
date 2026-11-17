// Writes one redirect page per old GitHub Pages path, so every URL Bing/Google kept from the old
// irving1211.github.io/mia-beauty-boutique/ copy points at the SAME page on miabeautyboutique.com
// (canonical + 0-second meta refresh, which search engines treat like a permanent redirect).
// GitHub Pages cannot send real 301s. Paths = the site's routes (src/i18n/index.js on redo-2026-10) plus
// the old pre-redo anchors. usage (from this folder): node make-stubs.mjs
import { mkdirSync, writeFileSync } from 'node:fs';

const DOMAIN = 'https://miabeautyboutique.com/';
const paths = [
  '', 'en/',
  'secado-dominicano/', 'en/dominican-blowout/',
  'keratina/', 'en/keratin/',
  'novias/', 'en/bridal/',
  'extensiones-de-cabello/', 'en/hair-extensions/',
  'cabello-para-extensiones/', 'en/hair-bundles/',
  'color-mechas-balayage/', 'en/hair-color-balayage/',
  'cortes-de-cabello/', 'en/haircuts/',
  'unas-pedicura/', 'en/nail-salon/',
  'pestanas-cejas/', 'en/lashes-brows/',
  'privacidad/', 'en/privacy/',
  'accesibilidad/', 'en/accessibility/',
];

const page = (to, lang) => `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mía Beauty Boutique</title>
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.hash);</script>
</head>
<body style="font-family:sans-serif;padding:2rem">
<p>${lang === 'en' ? 'We moved to' : 'Nos mudamos a'} <a href="${to}">${to}</a></p>
</body>
</html>
`;

for (const p of paths) {
  const dir = new URL('./' + p, import.meta.url);
  mkdirSync(dir, { recursive: true });
  writeFileSync(new URL('index.html', dir), page(DOMAIN + p, p.startsWith('en/') ? 'en' : 'es'));
}

// Anything else: same path on the domain (the domain's own 404 page handles unknown ones).
writeFileSync(new URL('./404.html', import.meta.url), `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Mía Beauty Boutique</title>
<meta name="robots" content="noindex">
<script>
  var p = location.pathname.replace(/^\\/mia-beauty-boutique\\/?/, '');
  location.replace(${JSON.stringify(DOMAIN)} + p + location.search + location.hash);
</script>
</head>
<body style="font-family:sans-serif;padding:2rem"><p>Nos mudamos a <a href="${DOMAIN}">miabeautyboutique.com</a></p></body>
</html>
`);
console.log(`wrote ${paths.length} redirect pages + 404.html`);
