import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  render() {
    return <footer className={styles.footer}>
      <div className={styles.icp}>福建虎翼网络科技有限公司 | 闽ICP备16028144号-1</div>
      <div className={styles.logo}><p /></div>
    </footer>
  }
}
