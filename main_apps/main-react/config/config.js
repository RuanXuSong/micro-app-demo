// https://umijs.org/config/
const openBrowser = require('react-dev-utils/openBrowser');
import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import routes from './routes';
import { PREFIX_CLASS } from '../src/constant';
const path = require('path');

export default defineConfig({
  plugins: [
    require.resolve('@alita/plugins/dist/keepalive'),
    require.resolve('@alita/plugins/dist/tabs-layout'),
  ],
  antd: {
    configProvider: {
      prefixCls: PREFIX_CLASS,
    },
  },
  keepalive: [/cloud/],
  tabsLayout: {
    hasDropdown: true,
  },
  dva: {},
  targets: {
    ie: 11,
  },
  routes,
  base: '/',
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  jsMinifier: 'terser',
  title: false,
  manifest: {
    basePath: '/',
  },
  lessLoader: {
    modifyVars: {
      '@ant-prefix': PREFIX_CLASS,
    },
  },
  model: {},
  request: {},
  initialState: {},
  outputPath: 'build',
  publicPath: '/',
  chainWebpack(config) {
    config.module.rule('otf').test(/.otf$/).use('file-loader').loader('file-loader');
  },
});
