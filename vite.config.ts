import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import * as fs from 'fs';
import lessToJS from 'less-vars-to-js';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases({})],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  define: {
    'process.env': process.env,
  },
});
