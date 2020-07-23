import React from 'react';
import WebTerm from './term'
import WebSettings from './settings'
import './index.css';

class WebBody extends React.Component {

    render() {
        return <div id='webBody'>
        <WebTerm/>
        <WebSettings/>
        </div>
    }

    componentDidMount() {
        var b_root = document.getElementById('webBody')
        for (let v in b_root.children) {
            try{
                b_root.children[v].style.display = 'none'
            }
            catch{}
        }
    }


}

export default WebBody