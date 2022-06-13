let config = {
  dataFront: 'http://localhost:8000/',
  react17: 'http://bi-sso.dev.thundersdata.com:8181/',
  // vue2: 'http://localhost:4001/',
  // vue3: 'http://localhost:4002/',
  // angular11: 'http://localhost:6001/',
  // vite: 'http://localhost:7001/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const locationOrigin = `${location.origin}/`;
  config = {
    dataFront: locationOrigin,
    react17: locationOrigin,
    // vue2: locationOrigin,
    // vue3: locationOrigin,
    // angular11: locationOrigin,
    // vite: locationOrigin,
  };
}

export default config;
