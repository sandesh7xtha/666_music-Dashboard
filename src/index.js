import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import { Login } from "./Blog/pages/Login/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/admin/Login" component={Login} />
      </Switch>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
