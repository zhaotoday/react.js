module.exports = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('app'),
    getIndexRoute(location, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('app/dashboard')
        })
      })
    }
  }]
}
