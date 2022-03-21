import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./provider";
import GlobalStyle from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
