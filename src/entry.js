import React from 'react'
import routes from './routes'
import { render } from 'react-dom'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'))
