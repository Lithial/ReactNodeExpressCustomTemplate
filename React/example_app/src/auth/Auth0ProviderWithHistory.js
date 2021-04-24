import React  from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import {AUDIENCE, CLIENT_ID, DEV_MODE, DOMAIN} from "../config/config";

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    if(DEV_MODE){
        console.log("Domain: ", DOMAIN)
        console.log("Audience: ", AUDIENCE)
        console.log("ClientId: ", CLIENT_ID)
    }
    const onRedirectCallback = (appState) => {
      history.push(appState?.returnTo || window.location.pathname);
    };
    return (
        <Auth0Provider
          domain={DOMAIN}
          clientId={CLIENT_ID}
          redirectUri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
          audience={AUDIENCE}
        >
          {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;