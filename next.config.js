const BACKEND_URL = process.env.BACKEND_URL || ''

module.exports = {
  assetPrefix: BACKEND_URL,
  basePath: BACKEND_URL,
}
