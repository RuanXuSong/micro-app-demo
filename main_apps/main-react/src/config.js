let config = {
  react16: 'http://localhost:3001',
  react17: 'http://localhost:3002',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  const baseUrl = `${window.location.origin}/`;
  config = {
    react16: baseUrl,
    react17: baseUrl,
  };
}

export default config;
