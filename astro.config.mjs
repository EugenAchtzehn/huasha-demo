import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://eugenachtzehn.github.io/',
  base: 'huasha-demo',
  integrations: [sitemap()],
});