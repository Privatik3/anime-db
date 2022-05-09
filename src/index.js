import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page from "./Page";
import ItemPage from "./ItemPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemPage />
  </React.StrictMode>
);
