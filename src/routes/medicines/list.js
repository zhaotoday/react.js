export default {
  path: 'form',
  getComponent (location, cb) {
    require.ensure([], (require) => {
      cb(null, require('modules/medicines/list').default)
    })
  }
}
