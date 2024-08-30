
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
// import {Provider} from "react-redux"
const domain = import.meta.env.AUTH0_DOMAIN;
const clientid = import.meta.env.AUTH0_CLIENTID;
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-yx00ugelqb2271hv.us.auth0.com"
    clientId="JQWBysNRhSIl6CoOimvqJmz4yE5eWpjw"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: `https://dev-yx00ugelqb2271hv.us.auth0.com/api/v2/`
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
)
