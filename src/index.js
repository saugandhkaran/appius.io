import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma'
import App from './App';
import TheHeader from './components/TheHeader';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TheHeader />
    <App />
    <p className="center"><b>P.S</b>: Your data is not stored by us.</p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
