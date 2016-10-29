import React from 'react'
import Header from './components/header'
import Body from './components/body'

module.exports = class extends React.Component {
  render() {
    return <div>
      <Header />
      <Body />
    </div>
  }
}
