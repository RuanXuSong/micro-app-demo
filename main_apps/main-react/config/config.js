// https://umijs.org/config/
const openBrowser = require('react-dev-utils/openBrowser');
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
const path = require('path');

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  links: [
    {
      type: 'text/css',
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1269694_ssyauvyyv8j.css',
    },
  ],
  // umi routes: https://umijs.org/docs/routing
  routes,
  base: '/',
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  esbuild: {},
  outputPath: 'build',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack(webpackConfig) {
    if (process.env.NODE_ENV === 'development') {
      webpackConfig.plugin('openBrowser').use({
        apply(compiler) {
          compiler.hooks.done.tap('openBrowser', () => {
            if (!openBrowser.used) {
              openBrowser.used = true;
              setTimeout(() => {
                openBrowser(`http://localhost:3000/`);
              }, 1000);
            }
          });
        },
      });
    }
  },
  mfsu: {},
});
