import React from 'react'
import './i18n'

module.exports = class extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
