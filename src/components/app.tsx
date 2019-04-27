import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MainAppBar } from "./main-app-bar";
import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";

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
      <CssBaseline />
      <MainAppBar />
    </div>
  );
};
