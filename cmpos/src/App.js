import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";

import LoginPage from "./components/pages/LoginPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Menu />

      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}
