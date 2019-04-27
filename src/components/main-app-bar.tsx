import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import React from "react";
import Typography from "@material-ui/core/Typography";
import githubImg from "../images/gh64.png";
import { Link } from "react-router-dom";

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
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h4" color="inherit">
              🐱‍👤 FuryStack
            </Typography>
          </Link>
        </div>
        <div style={{ flex: 1 }} />
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
          <a
            title="See more on GitHub"
            href="https://github.com/furystack/furystack"
            target="_blank"
          >
            <img style={{ height: "44px" }} src={githubImg} />
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};
