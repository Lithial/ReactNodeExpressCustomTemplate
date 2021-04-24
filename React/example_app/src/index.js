import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

//Different Contexts can be wrapped in here.
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <CssBaseline />
          <Auth0ProviderWithHistory>
              <App />
          </Auth0ProviderWithHistory>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
