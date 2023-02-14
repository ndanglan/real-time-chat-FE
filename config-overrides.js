// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
console.log({path})
module.exports = override(
  addWebpackAlias({
    '@services': path.resolve(__dirname, 'src/services'),
  })
);