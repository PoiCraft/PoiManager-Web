import React from 'react';
import ReactDOM from 'react-dom';
import WebHeader from './header';
import WebMenu from './menu'
import WebBody from './body'
import './index.css';

ReactDOM.render(
    <div>
        <WebHeader
        menu={[
            <WebMenu/>
            ]} 
        />
        <WebBody />
    </div>,
    document.getElementById('root')
  );