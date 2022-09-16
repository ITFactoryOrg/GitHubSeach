import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import App from "./App";
import "./index.css";

//dev-c7kox9aa.us.auth0.com
//ag1ILLFjkGbPkfndmmdcATKXk0Ad53ns

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-c7kox9aa.us.auth0.com"
      clientId="ag1ILLFjkGbPkfndmmdcATKXk0Ad53ns"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
