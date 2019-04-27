import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MainAppBar } from "./main-app-bar";
import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Packages } from "../pages/packages";

export const App: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
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
              overflow: "auto"
            }}
          >
            <Switch>
              <Route path="/packages">
                <Packages />
              </Route>
              <Route>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
