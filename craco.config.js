const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve('src'),
      "components": resolve('src/components'),
      "utils": resolve('src/utils'),
      "store": resolve('src/store'),
      "assets": resolve('src/assets'),
      "pages": resolve('src/pages'),
      "services": resolve('src/services'),
      "router": resolve('src/router'),
      "common": resolve('src/common'),
    }
  }
}