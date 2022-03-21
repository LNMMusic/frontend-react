// LIBS
import React from 'react'; import ReactDOM from 'react-dom';
import 'normalize.css'; import './index.css';                 //  -> HTML Head






// RENDER                                                     //  -> HTML Body
import App from './App';

const target = document.getElementById('root')
ReactDOM.render(
  <App />,
  target
);