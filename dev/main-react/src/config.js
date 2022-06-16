let config = {
  dataFront: 'http://localhost:8000/',
  thunderBi: 'http://bi-sso.dev.thundersdata.com:8181/',
  biSheng: 'http://bisheng-online-frontend-sso.dev.thundersdata.com:3001/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const locationOrigin = `${location.origin}/`;
  config = {
    dataFront: locationOrigin,
    thunderBi: locationOrigin,
    biSheng: locationOrigin,
  };
}

export default config;
