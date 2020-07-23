import './index.css';
import React from 'react'
import { Menu } from 'antd'

class WebMenu extends React.Component {
    state = {
        current: 'terminal',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
        
      };
    
      render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="terminal">
              Terminal
            </Menu.Item>
            <Menu.Item key="setting">
              Settings
            </Menu.Item>
          </Menu>
        )
    }
}

export default WebMenu