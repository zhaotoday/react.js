import React from 'react'
import { Button, WingBlank, WhiteSpace, List, InputItem } from 'antd-mobile'
import styles from './theme/styles/index.scss'

export default class extends React.Component {
  render () {
    return <div className={styles.login}>
      <div className={styles.logo} />
      <WhiteSpace size='xl' />
      <div className={styles.slogan}>这里放孝哈哈的标语</div>
      <WhiteSpace size='xl' />
      <List>
        <InputItem type='phone' defaultValue='' placeholder='请输入手机号' clear>账号</InputItem>
        <InputItem type='password' defaultValue='' placeholder='请输入密码' clear>密码</InputItem>
        <List.Item arrow='horizontal' extra='忘记密码'>&nbsp;</List.Item>
      </List>
      <WingBlank>
        <WhiteSpace size='xl' />
        <Button type='primary' onClick={this._handleClickLogin}>登录</Button>
      </WingBlank>
    </div>
  }

  _handleClickLogin = () => {
    console.log(22)
  }
}
