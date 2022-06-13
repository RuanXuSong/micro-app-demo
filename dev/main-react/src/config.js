let config = {
  dataFront: 'http://localhost:8000/',
  thunderBi: 'http://bi-sso.dev.thundersdata.com:8181/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const locationOrigin = `${location.origin}/`;
  config = {
    dataFront: locationOrigin,
    thunderBi: locationOrigin,
  };
}

export default config;
