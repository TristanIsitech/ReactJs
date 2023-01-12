import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{MyAppContextProvider} from './Store/appContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContextProvider>
    <App />
  </MyAppContextProvider>
);
