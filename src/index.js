import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Authprovider } from './context/Authcontext';
import {
  FpjsProvider,
  // defaultEndpoint,
  // defaultScriptUrlPattern
} from '@fingerprintjs/fingerprintjs-pro-react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FpjsProvider
  loadOptions={{
    "apiKey":"ehDes8rhdo8GlMcannPg"
  }}
  >
    <App />
  </FpjsProvider>
  </React.StrictMode>
);
