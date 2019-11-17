import React from "react";
import "./App.css";
import Loginform from "./Components/Loginform";
import Registerform from "./Components/Registerform";
import AppNavbar from "./Components/AppNavbar";
import VendorMain from "./Components/VendorMain";
import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="login-form-container">
          <Router>
            <AppNavbar />
            <Switch>
              <Route path="/login-account">
                <Loginform />
              </Route>
              <Route path="/create-account">
                <Registerform />
              </Route>
              <Route path="/vendorhome" component={VendorMain}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
