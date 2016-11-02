import React from 'react'
import styles from './theme/styles'
import Hammer from 'react-hammerjs'

export default class extends React.Component {
  render() {
    return <header className={styles.header}>
      <div className={styles.logo} />
      <a className={styles.download} href="http://m.yingqiu8.com/download.html" />
    </header>
  }

  _handleTapLeft() {
    console.log('tap left')
  }

  _handleTapRight() {
    console.log('tap right')
  }
}
