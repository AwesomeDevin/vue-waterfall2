import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2';

import packageJSON from './package.json'

export default defineConfig({
  mode: "production",
  
  build: {
    lib: {
      entry: ['./index.js'],
      name: packageJSON.name,
      formats: ['es'],
      fileName: (format, entryName) => {
        return `${entryName}.${format}.js`
      },
    }
  },

  plugins: [vue2()],
})