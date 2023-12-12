import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const changeTheme = (theme, text, subtext) => {
  document.querySelector(":root").style.setProperty("--theme-color", theme);
  document.querySelector(":root").style.setProperty("--text-color", text);
  document.querySelector(":root").style.setProperty("--subtext-color", subtext);
} 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<>
  <meta name="theme-color" content="#057391"></meta>
  <meta name="msapplication-navbutton-color" content="#057391"></meta>
  <meta name="apple-mobile-web-app-status-bar-style" content="#057391"></meta>
</>

export default changeTheme;