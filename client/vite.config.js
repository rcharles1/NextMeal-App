import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodePolyfillPlugin }from 'node-polyfill-webpack-plugin';

export default defineConfig({
  plugins: [
    react(),
    NodePolyfillPlugin(),
  ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      process: 'process/browser',
    }
  }
});