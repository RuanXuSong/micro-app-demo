let config = {
  dataFront: 'http://localhost:8000/',
  thunderBi: 'http://bi-sso.dev.thundersdata.com:8181/',
  biSheng: 'http://localhost:3001/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const locationOrigin = `${location.origin}/`;
  config = {
    dataFront: 'http://data.realtime.dev.thundersdata.com/',
    thunderBi: 'http://bi-sso.dev.thundersdata.com/',
    biSheng: 'http://bisheng-online-frontend-sso.dev.thundersdata.com/',
  };
}

export default config;
