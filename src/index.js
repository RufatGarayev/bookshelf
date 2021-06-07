import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider > */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);