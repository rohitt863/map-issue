var WebpackObfuscator = require('webpack-obfuscator');
// const path = require('path');


module.exports = function override(config, env) {
  config.plugins.push(
    new WebpackObfuscator({
      rotateStringArray: true
    }, ['bundles/**/**.js'])
  );
  return config
}

