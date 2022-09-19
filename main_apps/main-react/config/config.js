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
  links: [
    {
      type: 'text/css',
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1269694_ssyauvyyv8j.css',
    },
  ],
  scripts: [
    {
      src: 'https://webapi.amap.com/maps?callback=___onAPILoaded&v=1.4.15&key=996c744763dcf3cf93bccb07c9261975&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.DistrictSearch,AMap.CitySearch,AMap.Geocoder',
      global: true,
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
