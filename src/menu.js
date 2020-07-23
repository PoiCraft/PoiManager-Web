import './index.css';
import React from 'react'
import { Menu } from 'antd'

class WebMenu extends React.Component {
    keys = []

    state = {
        current: 'terminal',
    };

    handleClick = e => {
        this.setState({ current: e.key });
        if (!(e.key in this.keys)){
            this.keys.push(e.key)
        }
        for (let v in this.keys) {
            console.log(this.keys)
            console.log(v)
            document.getElementById(this.keys[v]).style.display='none'
        }
        document.getElementById(e.key).style.display='inline'
    };

    componentDidMount() {
        document.getElementById(this.state.current).style.display='inline'
    }

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="terminal">
                    Terminal
            </Menu.Item>
                <Menu.Item key="settings">
                    Settings
            </Menu.Item>
            </Menu>
        )
    }
}

export default WebMenu