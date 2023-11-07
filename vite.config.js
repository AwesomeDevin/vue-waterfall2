import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import packageJSON from './package.json'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [ vue(), cssInjectedByJsPlugin()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: VITE_PORT,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
    },
    build: {
      minify: true,
      outDir: 'dist',
      lib: {
        entry: [__dirname + '/main/index.js'],
        name: packageJSON.name,
        formats: ['es'],
        fileName: (format, entryName) => {
          return `${entryName}.${format}.js`
        },
      },
      rollupOptions: {
        external: ['vue'],
      },
    },
  });
};