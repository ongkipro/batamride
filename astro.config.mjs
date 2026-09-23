// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://batamride.com',
  output: 'static',
  redirects: {
    '/tours': '/services/',
    '/destinations': '/services/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
