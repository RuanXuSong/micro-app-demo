let config = {
  'smart-bi': 'http://bi-sso.dev.thundersdata.com:8181/',
  'smart-data': 'http://127.0.0.1:8000/',
  'smart-lowcode': 'http://localhost:3001/',
  'smart-visualization': 'http://localhost:38204',
  'smart-iot': 'http://127.0.0.1:8000/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  config = {
    'smart-bi': 'http://smart-bi.jxzk.thundersdata.com:38204/smart-bi',
    'smart-data': 'http://smart-data.jxzk.thundersdata.com:38204/smart-data/',
    'smart-lowcode': 'http://lowcode.jxzk.thundersdata.com:38204',
    'smart-visualization':
      'http://smart-visualization.jxzk.thundersdata.com:38204/smart-visualization',
    'smart-iot': 'http://smart-iot.jxzk.thundersdata.com:38204/smart-iot',
  };
}

/** 退出登录跳转页 */
export const LOGOUT_PATH =
  'http://platform-frontend.jxzk.thundersdata.com:38204/logout?redirect_url=http://platform-frontend.jxzk.thundersdata.com:38204/';

export default config;
