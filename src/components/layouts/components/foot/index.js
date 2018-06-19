import React from 'react'
import { TabBar, Modal } from 'antd-mobile'
import helpers from 'utils/helpers/base'
import styles from './theme/styles/index.scss'

const renderIcon = name => {
  return <div style={{
    width: '22px',
    height: '22px',
    background: `url(${helpers.getIcon({ path: `${name}.svg` })}) center center /  21px 21px no-repeat`
  }} />
}

export default class extends React.Component {
  state = {
    selectedTab: 'storehouse',
    hidden: false
  }

  render () {
    return <div className={styles.foot}>
      <TabBar
        unselectedTintColor='#949494'
        tintColor='#33A3F4'
        barTintColor='white'
        hidden={this.state.hidden}>
        <TabBar.Item
          title='仓库'
          key='storehouse'
          icon={renderIcon('storehouse')}
          selectedIcon={renderIcon('storehouse-active')}
          selected={this.state.selectedTab === 'storehouse'}
          onPress={() => {
            Modal.operation([
              { text: '医疗', onPress: () => console.log('第0个按钮被点击了') },
              { text: '食堂', onPress: () => console.log('第1个按钮被点击了') },
              { text: '日用品', onPress: () => console.log('第1个按钮被点击了') }
            ])

            this.setState({
              selectedTab: 'storehouse'
            })
          }}
          data-seed='logId' />
        <TabBar.Item
          title='车辆'
          key='car'
          icon={renderIcon('car')}
          selectedIcon={renderIcon('car-active')}
          selected={this.state.selectedTab === 'car'}
          onPress={() => {
            this.setState({
              selectedTab: 'car'
            })
          }}
          data-seed='logId' />
        <TabBar.Item
          title='人员'
          key='persons'
          icon={renderIcon('persons')}
          selectedIcon={renderIcon('persons-active')}
          selected={this.state.selectedTab === 'persons'}
          onPress={() => {
            this.setState({
              selectedTab: 'persons'
            })
          }}
          data-seed='logId' />
        <TabBar.Item
          title='通知'
          key='message'
          icon={renderIcon('message')}
          selectedIcon={renderIcon('message-active')}
          selected={this.state.selectedTab === 'message'}
          badge={3}
          onPress={() => {
            this.setState({
              selectedTab: 'message'
            })
          }}
          data-seed='logId' />
        <TabBar.Item
          title='我的'
          key='my'
          icon={renderIcon('my')}
          selectedIcon={renderIcon('my-active')}
          selected={this.state.selectedTab === 'my'}
          onPress={() => {
            this.setState({
              selectedTab: 'my'
            })
          }}
          data-seed='logId' />
      </TabBar>
    </div>
  }
}
