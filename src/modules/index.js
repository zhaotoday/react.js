import React from 'react'
import init from 'utils/init'
import PropTypes from 'prop-types'
import { CHead, CBody, CSidebar, CMain } from 'components/layouts'

init()

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render () {
    return <div>
      <CHead />
      <CBody>
        <CSidebar ref='sidebar' />
        <CMain>{this.props.children}</CMain>
      </CBody>
    </div>
  }
}
