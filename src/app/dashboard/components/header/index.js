import React from 'react'
import styles from './theme/styles'
import Hammer from 'react-hammerjs'

export default class extends React.Component {
  render() {
    return <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className="f1">
          <Hammer onTap={this._handleTapLeft}>
            <div className={styles.left}></div>
          </Hammer>
          赢球大师
          <Hammer onTap={this._handleTapRight}>
            <div className={styles.right}></div>
          </Hammer>
        </h1>
      </div>
      <div className={styles.logo}></div>
      <a className={styles.download} href="#"></a>
    </header>
  }

  _handleTapLeft() {
    alert('left')
  }

  _handleTapRight() {
    alert('right')
  }
}
