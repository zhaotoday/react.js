import auth from 'utils/auth'

export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('modules').default,
    onEnter (nextState, replace) {
      if (!auth.isLogin()) {
        replace({
          pathname: '/login',
          state: {
            nextPathname: nextState.location.pathname
          }
        })
      }
    },
    getIndexRoute (location, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('modules/dashboard').default
        })
      })
    },
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./articles').default
        ])
      })
    }
  }, {
    path: 'login',
    component: require('modules/login').default,
    onEnter (nextState, replace) {
      if (auth.isLogin()) {
        replace('/')
      }
    }
  }]
}
