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
    outDir: 'dist',
    rollupOptions: {
     
    },
  },
  resolve: {
    alias: {
      
    },
  },
  optimizeDeps: {
    
  },
});
