import React from 'react';
import ReactDOM from 'react-dom/client';
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>
);