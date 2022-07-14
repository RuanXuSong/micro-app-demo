let config = {
  thunderBi: 'http://bi-sso.dev.thundersdata.com:8181/',
  dataFront: 'http://127.0.0.1:8000/',
  biSheng: 'http://localhost:3001/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const locationOrigin = `${location.origin}/`;
  config = {
    thunderBi: 'http://bi-sso.dev.thundersdata.com/',
    dataFront: 'http://data-sso.dev.thundersdata.com/',
    biSheng: 'http://bisheng-online-frontend-sso.dev.thundersdata.com/',
  };
}

/** 退出登录跳转页 */
export const LOGOUT_PATH =
  'http://platform-frontend.dev.thundersdata.com/logout?redirect_url=http://platform-frontend.dev.thundersdata.com';

export default config;
