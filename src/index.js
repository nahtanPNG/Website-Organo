import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  Strict mode -> Ajudar com erros de renderização
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

