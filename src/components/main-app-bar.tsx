import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import React from "react";
import Typography from "@material-ui/core/Typography";

export const MainAppBar: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            textDecoration: "none",
            overflow: "hidden",
            alignItems: "center",
            flexGrow: 0
          }}
        >
          <Typography variant="h4" color="inherit">
            🐱‍👤 FuryStack
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
