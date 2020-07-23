import React from 'react';
import ReactDOM from 'react-dom';
import WebHeader from './header';
import WebMenu from './menu'
import './index.css';

ReactDOM.render(
    <WebHeader
    menu={[
        <WebMenu/>
        ]} 
    />,
    document.getElementById('root')
  );