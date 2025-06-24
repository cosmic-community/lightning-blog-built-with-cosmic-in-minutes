import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your Astro configuration
  integrations: [],
  image: {
    domains: ['imgix.cosmicjs.com'],
  },
});