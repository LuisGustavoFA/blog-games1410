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

window.statusbar.visible = false;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default changeTheme;