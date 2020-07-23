import './index.css';
import React from 'react'
import { Input, PageHeader } from 'antd'

class WebHeader extends React.Component {

    constructor(props) {
        super(props);;
        this.state = {
            address: '',
            token: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return <header>
            <PageHeader
                ghost={false}
                title="PoiManager"
                extra={[
                    <Input.Group compact>
                        <Input
                            id='input_address'
                            addonBefore='http://'
                            name='address'
                            onChange={this.handleInputChange}
                            defaultValue='127.0.0.1:5500'
                            allowClear
                            value={this.props.address}
                            style={{ width: '60%' }} />

                        <Input
                            id='input_token'
                            addonBefore='?token='
                            onChange={this.handleInputChange}
                            name='token'
                            type='password'
                            allowClear
                            value={this.props.token}
                            style={{ width: '40%' }} />
                    </Input.Group>
                ]}
                footer={this.props.menu}
            />
        </header>
    }
}

export default WebHeader