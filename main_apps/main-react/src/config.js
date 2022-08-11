let config = {
  thunderBi: 'http://bi-sso.dev.thundersdata.com:8181/',
  dataFront: 'http://127.0.0.1:8000/',
  biSheng: 'http://localhost:3001/',
  swiftScreen: 'http://smart-visualization.jxzk.thundersdata.com:38204/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const locationOrigin = `${location.origin}/`;
  config = {
    thunderBi: 'http://smart-bi.jxzk.thundersdata.com:38204/',
    dataFront: 'http://data-sso.dev.thundersdata.com/',
    biSheng: 'http://lowcode.jxzk.thundersdata.com:38204/',
    swiftScreen: 'http://smart-visualization.jxzk.thundersdata.com:38204/',
  };
}

/** 退出登录跳转页 */
export const LOGOUT_PATH =
  'http://sso.jxzk.thundersdata.com:38204/login?client_id=jxzk-sso&client_secret=9IBMhoKp1eOHKe11&request_url=http://platform-frontend.jxzk.thundersdata.com:38204&root_domain=thundersdata.com';

export default config;
