import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyAppContextProvider } from './Store/appContext.js'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyAppContextProvider>
);
