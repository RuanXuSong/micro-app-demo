// https://umijs.org/config/
const openBrowser = require('react-dev-utils/openBrowser');
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
import { PREFIX_CLASS } from '../src/constant';
const path = require('path');

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  antd: {
    config: {
      prefixCls: PREFIX_CLASS,
    },
  },
  dva: {
    hmr: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  base: '/',
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  manifest: {
    basePath: '/',
  },
  lessLoader: {
    modifyVars: {
      '@ant-prefix': PREFIX_CLASS,
    },
  },
  esbuild: {},
  outputPath: 'build',
  publicPath: '/',
  chainWebpack(config) {
    config.module.rule('otf').test(/.otf$/).use('file-loader').loader('file-loader');
  },
});
