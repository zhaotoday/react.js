import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import styles from './theme/styles/index.scss'
import helpers from 'utils/helpers/base'
import PropTypes from 'prop-types'

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: '孝哈哈企业 App'
  }

  render () {
    const { title } = this.props

    return <div className={styles.head}>
      <NavBar
        mode='light'
        icon={<Icon type='left' />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={
          <img src={helpers.getIcon({ path: 'qr-code.svg' })} className='am-icon am-icon-md' alt='' />
        }>{title}</NavBar>
    </div>
  }
}
