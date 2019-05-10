import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeContext } from "../context/theme-context";
import { GettingStarted } from "../pages/getting-started";
import { Guide } from "../pages/guide";
import { GuideInject } from "../pages/guide-inject";
import { Home } from "../pages/home";
import { MainAppBar } from "./main-app-bar";

export const App: React.FunctionComponent = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <MuiThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: theme.palette.background.default
            }}
          >
            <BrowserRouter>
              <CssBaseline />
              <MainAppBar />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    margin: "1em",
                    overflow: "auto",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Switch>
                    <Route path="/getting-started">
                      <GettingStarted />
                    </Route>
                    <Route path="/guide">
                      <Guide />
                    </Route>
                    <Route path="/guide-inject">
                      <GuideInject />
                    </Route>
                    <Route>
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};
