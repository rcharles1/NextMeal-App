import { defineConfig } from 'vite';
import {nodePolyfills} from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      // Options for the plugin
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],
  build: {
    rollupOptions: {
      // Additional Rollup options if needed
    },
  },
  resolve: {
    alias: {
      // Your aliases here
    },
  },
  optimizeDeps: {
    // Your optimization options here
  },
});
