// import auth from 'utils/auth'

export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('modules').default,
    onEnter (nextState, replace) {
      /*
      if (!auth.loggedIn()) {
        replace({
          pathname: '/login',
          state: {
            nextPathname: nextState.location.pathname
          }
        })
      }
      */
    },
    getIndexRoute (location, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('modules/home').default
        })
      })
    },
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./articles').default,
          require('./medicines').default
        ])
      })
    }
  }, {
    path: 'login',
    component: require('modules/login').default,
    onEnter (nextState, replace) {
      /*
      if (auth.loggedIn()) {
        replace('/')
      }
      */
    }
  }, {
    path: 'password',
    component: require('modules/password').default
  }]
}
