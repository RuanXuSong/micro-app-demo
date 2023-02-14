import 'babel-polyfill';
import microApp, { unmountApp, unmountAllApps } from '@micro-zoe/micro-app';
import config from './config';

microApp.start({
  // shadowDOM: true,
  // inline: true,
  // destroy: true,
  // disableScopecss: true,
  // disableSandbox: true,
  // macro: true,
  lifeCycles: {
    created() {
      console.log('created 全局监听');
    },
    beforemount(e) {
      console.log('beforemount 全局监听', e);
    },
    mounted() {
      console.log('mounted 全局监听');
    },
    unmount() {
      console.log('unmount 全局监听');
    },
    error() {
      console.log('error 全局监听');
    },
  },
  plugins: {
    global: [
      {
        scopeProperties: ['scopeKey1', 'scopeKey2'],
        escapeProperties: ['escapeKey1', 'escapeKey2'],
        options: { a: 1 },
        loader(code, url, options) {
          // console.log('vue2插件', url, options)
          return code;
        },
      },
      {
        loader(code) {
          code = `
            window.__micro_app_environment__ = window.__MICRO_APP_ENVIRONMENT__
            window.__micro_app_name__ = window.__MICRO_APP_NAME__
            window.__full_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
            window.baseurl = window.__MICRO_APP_BASE_ROUTE__
            ;${code}
          `;
          return code;
        },
      },
    ],
    modules: {
      react: [
        {
          scopeProperties: ['scopeKey3', 'scopeKey4'],
          escapeProperties: ['escapeKey3', 'escapeKey4'],
          loader(code, url) {
            if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
              code = code.replace('window.location.port', '3001');
            }
            return code;
          },
        },
      ],
      thunderBi: [
        {
          loader(code, url) {
            if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
              code = code.replace('window.location.port', '3002');
            }
            return code;
          },
        },
      ],
    },
  },
  /**
   * 自定义fetch
   * @param url 静态资源地址
   * @param options fetch请求配置项
   * @returns Promise<string>
   */
  fetch(url, options, appName) {
    let config = null;
    if (process.env.NODE_ENV === 'production') {
      config = {
        credentials: 'include',
      };
    }

    return fetch(url, Object.assign(options, config)).then((res) => {
      return res.text();
    });
  },
});
