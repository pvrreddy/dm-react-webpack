const path = require('path')
const BackendBuildConfig = require('./config/backendBuild')
const BackendWatchConfig = require('./config/backendWatch')
const FrontendBuildConfig = require('./config/frontendBuild')
const FrontendWatchConfig = require('./config/frontendWatch')

module.exports = (function () {
  let options = {}
  try {
    require.resolve(path.join(process.cwd(), 'derby-webpack.config'))
    options = require(path.join(process.cwd(), 'derby-webpack.config'))
  } catch (e) {}
  if (process.env.WP_BACKEND) {
    if (process.env.WP_WATCH) {
      return (new BackendWatchConfig(options)).config
    } else {
      return (new BackendBuildConfig(options)).config
    }
  } else {
    if (process.env.WP_WATCH) {
      return (new FrontendWatchConfig(options)).config
    } else {
      return (new FrontendBuildConfig(options)).config
    }
  }
})()
