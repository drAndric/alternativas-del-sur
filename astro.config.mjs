import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alternativas.desdeelsur.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
