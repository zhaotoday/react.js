import React from 'react'
import routes from './routes'
import store from './redux/store'
import {render} from 'react-dom'
import Router from 'react-router/Router'
import createHashHistory from 'history/createHashHistory'
import Provider from 'react-redux/lib/components/Provider'

const hashHistory = createHashHistory(location)

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
