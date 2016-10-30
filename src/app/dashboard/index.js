import React from 'react'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

module.exports = class extends React.Component {
  render() {
    return <div>
      <Header />
      <Body />
      <Footer />
    </div>
  }
}
