import React from 'react';
import ReactDOM from 'react-dom/client';
//import OrgChart from './strct';
//import './sty.css';
//import './index.css';
import './s.css';
import Slider from './t';
import TitleBar from './titl';
import  './tit.css';
import Hierarchy from "./hierarchy";
import "./hier.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleBar/>
    <Hierarchy/>
    <Slider/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
