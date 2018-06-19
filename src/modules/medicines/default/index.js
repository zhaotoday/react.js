import React from 'react'
import { List } from 'antd-mobile'

export default class extends React.Component {
  render () {
    return <div>

      <List renderHeader={() => '护理消耗品'} className='my-list'>
        {['老人护理用品', '日常洗涤', '老人助行', '床上用品', '日用品'].map(item => {
          return <List.Item arrow='horizontal' onClick={() => {}}>{item}</List.Item>
        })}
      </List>

      <List renderHeader={() => '药品'} className='my-list'>
        {['糖尿病类', '高血压类', '心脏病类', '消炎类', '胃药类', '消肿类', '止痛类', '活血类', '注射类'].map(item => {
          return <List.Item arrow='horizontal' onClick={() => {}}>{item}</List.Item>
        })}
      </List>

    </div>
  }
}
