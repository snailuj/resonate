const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = true
    return config
  }
})
