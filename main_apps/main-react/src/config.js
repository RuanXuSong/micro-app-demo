let config = {
  thunderBi: 'http://bi-sso.dev.thundersdata.com:8181/',
  dataFront: 'http://127.0.0.1:8000/',
  biSheng: 'http://localhost:3001/',
  swiftScreen: 'http://localhost:38204',
  iot: 'http://127.0.0.1:8000/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  config = {
    thunderBi: 'http://smart-bi.jxzk.thundersdata.com:38204/smart-bi',
    dataFront: 'http://smart-data.jxzk.thundersdata.com:38204/smart-data/',
    biSheng: 'http://lowcode.jxzk.thundersdata.com:38204',
    swiftScreen: 'http://smart-visualization.jxzk.thundersdata.com:38204/smart-visualization',
    iot: 'http://smart-iot.jxzk.thundersdata.com:38204/smart-iot',
  };
}

/** 退出登录跳转页 */
export const LOGOUT_PATH =
  'http://platform-frontend.jxzk.thundersdata.com:38204/logout?redirect_url=http://platform-frontend.jxzk.thundersdata.com:38204/';

export default config;
