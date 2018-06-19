import React from 'react'
import { CHead, CBody, CSidebar, CMain } from 'components/layouts'
import { Button, WingBlank, WhiteSpace, List, InputItem } from 'antd-mobile'

export default class extends React.Component {
  render () {
    return <div>
      <CHead />
      <CBody>
        <CSidebar />
        <CMain>
          <WhiteSpace size='xl' />
          <List>
            <InputItem type='phone' defaultValue='' placeholder='请输入手机号' clear>账号</InputItem>
            <InputItem
              type='number'
              maxLength={6}
              placeholder='请输入验证码' extra='获取验证码'>验证码</InputItem>
            <InputItem type='password' defaultValue='' placeholder='请输入新密码' clear>新密码</InputItem>
          </List>
          <WingBlank>
            <WhiteSpace size='xl' />
            <Button type='primary' onClick={this._handleClickLogin}>确认修改</Button>
          </WingBlank>

        </CMain>
      </CBody>
    </div>
  }
}
