import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.href = "http://localhost:3000/dashboard");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;