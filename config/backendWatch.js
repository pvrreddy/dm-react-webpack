const _ = require('lodash')
const BackendConfig = require('./backend')

module.exports = class BackendWatchConfig extends BackendConfig {

  constructor () {
    super()

    this.config.cache = true
    this.config.debug = true
    if (this.options.unsafeCache !== false) {
      this.config.resolve.unsafeCache = this.options.unsafeCache
    }
    this.config.devtool = this.options.backend.devtool != null
        ? this.options.backend.devtool
        : this.options.devtool
  }

}
