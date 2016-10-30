import React from 'react'
import 'themes/global'

class Comp extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

module.exports = Comp
