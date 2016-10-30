import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  render() {
    return <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className="f1">
          <div className={styles.left}></div>
          请求大师
          <div className={styles.right}></div>
        </h1>
      </div>
      <div className={styles.logo}></div>
      <div className={styles.download}></div>
    </header>
  }
}
