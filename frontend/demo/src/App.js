import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import "@coreui/icons/css/coreui-icons.min.css";
import "./scss/style.css";
import Full from "./containers/DefaultLayout/DefaultLayout.js";
import Login from "./views/Login/Login.js";
import { ProtectedRoute } from "./ProtectedRoute.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Login" name="Login" component={Login} />
          <ProtectedRoute path="/" name="App" component={Full} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
