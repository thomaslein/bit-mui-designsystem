import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [import.meta.resolve('./vitest.setup.mjs')],
  },
});
