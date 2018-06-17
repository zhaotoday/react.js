import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import styles from './theme/styles/index.scss'
import helpers from 'utils/helpers/base'

export default class extends React.Component {
  render () {
    return <div className={styles.head}>
      <NavBar
        mode='light'
        icon={<Icon type='left' />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={
          <img src={helpers.getIcon({ path: 'qr-code.svg' })} className='am-icon am-icon-md' alt='' />
        }
      >孝哈哈企业 App</NavBar>
    </div>
  }
}
