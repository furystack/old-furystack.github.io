import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme-context";
import githubImg from "../images/gh64.png";
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
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={icon} style={{ marginRight: "1em" }} />
              <MediaQuery minDeviceWidth={500}>
                {match =>
                  match ? (
                    <Typography
                      variant="h4"
                      color="inherit"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "monospace"
                      }}
                    >
                      FuryStack
                    </Typography>
                  ) : null
                }
              </MediaQuery>
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
              Get started
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
            <img
              title="Visit on GitHub"
              alt="github"
              style={{ height: "44px" }}
              src={githubImg}
            />
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};
