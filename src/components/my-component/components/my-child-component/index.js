import React from 'react'
import styles from './theme/styles/index.scss'

export default class extends React.Component {
  render () {
    return <div className={styles['my-child-component']}>
      my child component
    </div>
  }
}
