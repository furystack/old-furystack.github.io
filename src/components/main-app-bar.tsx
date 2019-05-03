import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import React from "react";
import Typography from "@material-ui/core/Typography";
import githubImg from "../images/gh64.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import icon from "../images/icon.png";

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
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={icon} height={30} style={{ marginRight: "1em" }} />
              <Typography variant="h4" color="inherit">
                FuryStack
              </Typography>
            </div>
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
          <Link
            to="/getting-started"
            style={{
              textDecoration: "none",
              marginRight: "0.5em",
              fontSize: "1.5em"
            }}
          >
            <Button style={{ color: theme.palette.text.primary }}>
              Getting started
            </Button>
          </Link>
          <Link
            to="/guide"
            style={{
              textDecoration: "none",
              marginRight: "0.5em",
              fontSize: "1.5em"
            }}
          >
            <Button style={{ color: theme.palette.text.primary }}>Guide</Button>
          </Link>
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
