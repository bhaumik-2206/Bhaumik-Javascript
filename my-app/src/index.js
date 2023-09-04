import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { NavigationBar } from './App';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavigationBar /> */}
    <App />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('root2')).render(
//   <Counter />
// )

reportWebVitals();