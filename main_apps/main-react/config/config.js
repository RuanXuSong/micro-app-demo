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
  // 数融子平台的 iconfont 地址
  links: [
    {
      type: 'text/css',
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1269694_ssyauvyyv8j.css',
    },
  ],
  // 低代码子平台高德地图服务
  headScripts: [
    {
      src: '/amapSecurityConfig.js',
    },
    {
      src: 'https://webapi.amap.com/loader.js',
    },
    {
      src: '/amap.js',
    },
  ],
  routes,
  base: '/',
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
