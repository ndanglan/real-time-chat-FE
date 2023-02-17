// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
  addWebpackAlias({
    '@services': path.resolve(__dirname, 'src/services'),
    '@stores': path.resolve(__dirname, 'src/stores'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@variables': path.resolve(__dirname, 'src/variables'),
    '@config': path.resolve(__dirname, 'src/config'),
    '@common-components': path.resolve(__dirname, 'src/common-components'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@middleware': path.resolve(__dirname, 'src/middleware'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@assets': path.resolve(__dirname, 'src/assets'),
  })
);