import React from 'react'
import MyChildComponent from './components/my-child-component'
import styles from './styles/index.scss'

export default class extends React.Component {
  render () {
    return <div className={styles['my-component']}>
      my component
      <MyChildComponent />
    </div>
  }
}
