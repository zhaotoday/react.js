import React from 'react'
import init from 'utils/init'
import PropTypes from 'prop-types'
import { Head, Body, Sidebar, Main } from 'modules/layout'

init()

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render () {
    return <div>
      <Head />
      <Body>
        <Sidebar ref='sidebar' />
        <Main>{ this.props.children }</Main>
      </Body>
    </div>
  }
}
