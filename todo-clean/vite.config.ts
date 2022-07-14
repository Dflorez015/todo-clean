import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const { resolve } = require('path');
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist"
  },
  // server: {
  //   hmr: true,
  //   host: true,
  //   open: true,
  //   port: 8007,
  // },
  // preview: {
  //   port: 8080
  // }
})