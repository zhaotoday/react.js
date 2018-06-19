import React from 'react'
import PropTypes from 'prop-types'
import './i18n'

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
