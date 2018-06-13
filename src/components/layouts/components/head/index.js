import React from 'react'
import { NavBar, Icon, Popover } from 'antd-mobile'
import styles from './theme/styles/index.scss'

export default class extends React.Component {
  render () {
    return <div className={styles.head}>
      <NavBar
        mode='light'
        icon={<Icon type='left' />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={
          <Popover
            mask
            overlayClassName='fortest'
            overlayStyle={{ color: 'currentColor' }}
            overlay={[
              <Popover.Item
                key='0'
                value='scan'
                icon={<Icon type='check-circle' />}
                data-seed='logId'>扫一扫</Popover.Item>,
              <Popover.Item
                key='1'
                value='scan'
                icon={<Icon type='check-circle' />}
                data-seed='logId'>扫一扫</Popover.Item>,
              <Popover.Item
                key='2'
                value='scan'
                icon={<Icon type='check-circle' />}
                data-seed='logId'>扫一扫</Popover.Item>
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0]
            }}
            onVisibleChange={() => {}}
            onSelect={() => {}}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center'
            }}
            >
              <Icon type='ellipsis' />
            </div>
          </Popover>
        }
      >NavBar</NavBar>
    </div>
  }
}
