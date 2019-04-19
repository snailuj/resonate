const withCSS = require('@zeit/next-css')

const isProd = process.env.NODE_ENV == "production"
module.exports = withCSS({
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = true
    return config
  }
  , assetPrefix: isProd ? 'https://snailuj.github.io' : ''
})
