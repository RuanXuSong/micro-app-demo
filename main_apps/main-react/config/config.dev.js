// https://umijs.org/config/
import { defineConfig } from 'umi';
const port = 3000;
export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  links: [
    {
      type: 'text/css',
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1269694_ssyauvyyv8j.css',
    },
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  devServer: {
    port,
  },
});
