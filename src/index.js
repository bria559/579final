import React from 'react';
import ReactDOM from 'react-dom';
import DisplayCovidData from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <>
    <div className="container">
      <div>
        <a href="https://github.com/bria559/579final">
          Code
        </a>
      </div>
      <h1>Covid19 Data</h1>
      <DisplayCovidData />
      <br></br>
    </div>
  </>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
