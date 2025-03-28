/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'dist/**',
        'src/main.tsx',
        'src/setupTests.ts',
        'src/vite-env.d.ts',
        'vite.config.ts',
        'eslint.config.js',
        '**/*.d.ts',
        'src/redux/types.ts'
      ],
    },
  },
});
