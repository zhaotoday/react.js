export default {
  path: 'medicines',
  getComponents (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('modules/medicines').default)
    })
  },
  getIndexRoute (location, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('modules/medicines/default').default
      })
    })
  },
  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./list').default
      ])
    })
  }
}
