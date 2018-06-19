export default {
  path: 'articles',
  getComponents (location, cb) {
    require.ensure([], require => {
      cb(null, require('modules/articles').default)
    })
  },
  getIndexRoute (location, cb) {
    require.ensure([], require => {
      cb(null, {
        component: require('modules/articles/list').default
      })
    })
  },
  getChildRoutes (location, cb) {
    require.ensure([], require => {
      cb(null, [
        require('./form').default
      ])
    })
  }
}
