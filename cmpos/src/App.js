import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";

import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import ShopPage from "./components/pages/ShopPage/ShopPage";
import StockPage from "./components/pages/StockPage/StockPage";
import StockCreatePage from "./components/pages/StockCreatePage/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage/StockEditPage";
import ReportPage from "./components/pages/ReportPage/ReportPage";
import TransactionPage from "./components/pages/TransactionPage/TransactionPage";
// ----
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#1E88E5" },
  },
  status: {
    danger: "orange",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Header />
      <Menu />

      <Switch>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Container className={classes.content} maxWidth={false}>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/stock" component={StockPage} />
              <Route path="/stock/create" component={StockCreatePage} />
              <Route
                exact={true}
                path="/"
                component={() => <Redirect to="/login" />}
              />
            </Container>
          </div>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}
