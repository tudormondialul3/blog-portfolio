// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain for canonical URL generation
  site: 'https://tudor.dev',

  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});
