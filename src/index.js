import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './App';


// get the element with Id root
//render the Card compenent ?? into that element
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing robots array as a prop to CardList
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
