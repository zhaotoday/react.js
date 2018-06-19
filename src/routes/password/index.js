export default {
  path: 'articles',
  getComponents (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('modules/articles').default)
    })
  },
  getIndexRoute (location, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('modules/articles/list').default
      })
    })
  },
  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./form').default
      ])
    })
  }
}
