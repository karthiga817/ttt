import React from 'react';
import ReactDOM from 'react-dom/client';

//import './s.css';
//import Slider from './t';
//import TitleBar from './titl';
//import  './tit.css';
import Chat from './chat.js';
import './chat.css';
//import Maz from './maz.js';
//import './maz.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chat/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
