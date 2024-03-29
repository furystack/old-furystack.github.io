import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme-context";
import falcon from "../images/falcon.png";
import fryingPan from "../images/frying_pan.png";
import hiddenBlade from "../images/hidden_blade.jpg";
import jabba from "../images/jabba.png";
import logo from "../images/logo_transparent.png";
import roach from "../images/roach.jpg";
import tsLogo from "../images/ts_logo.png";

export const HomeBulletPoint: React.FunctionComponent<{
  img?: string;
  title?: string;
}> = props => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 300,
        margin: "1em 2em",
        textAlign: "left",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 550
      }}
    >
      <img
        width={250}
        height={250}
        src={props.img}
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: 8,
          borderRadius: 10,
          filter: isHovered ? "" : "sepia(0.5) contrast(1.4)",
          transition: "filter 1.5s ease-in-out 0.3s",
          boxShadow: "1px 1px 20px rgba(0,0,0,0.6)"
        }}
      />
      <Typography
        style={{ color: theme.palette.text.primary, width: "100%" }}
        variant="h5"
      >
        {props.title}
      </Typography>
      <Typography
        style={{ color: theme.palette.text.secondary, textAlign: "justify" }}
        variant="body1"
      >
        {props.children}
      </Typography>
    </div>
  );
};

export const Home: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%"
      }}
    >
      <img src={logo} style={{ margin: "2em", maxWidth: "calc(100% - 4em)" }} />
      <Typography
        variant="h5"
        style={{
          color: theme.palette.text.primary,
          textAlign: "center",
          flex: 1,
          minWidth: "150px",
          maxWidth: "600px",
          padding: "1em"
        }}
      >
        A flexible framework that allows you to build complex backend services
        fast and easily.
        <div
          style={{ margin: "1em", display: "flex", justifyContent: "center" }}
        >
          <Link to="/getting-started">
            <Button
              color="primary"
              variant="contained"
              style={{ textDecoration: "none" }}
            >
              Get started
            </Button>
          </Link>
        </div>
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "row",
          width: "100%"
        }}
      >
        <HomeBulletPoint img={falcon} title="Rapid development. ">
          You can create a backend microservice in minutes with authentication,
          data stores, custom actions and ODdata without 3rd party packages.
        </HomeBulletPoint>
        <HomeBulletPoint
          img={roach}
          title="Contains all you need for the start."
        >
          You don't have to waste your time looking after packages for
          entry-level functionality
        </HomeBulletPoint>
        <HomeBulletPoint img={jabba} title="No bloated dependencies.">
          The Core is built on a top of native (browser/NodeJS) calls. All of
          the dependencies are carefully selected and maintained.
        </HomeBulletPoint>
        <HomeBulletPoint img={hiddenBlade} title="Easy to extend. ">
          You can create and use your own custom actions, websocket calls or
          implement your custom data store or logger
        </HomeBulletPoint>
        <HomeBulletPoint img={fryingPan} title="Cross Platform.">
          You can run it where NodeJs runs. Even on a frying pan. You can use
          some of the packages (logger, inject) on the frontend as well
        </HomeBulletPoint>
        <HomeBulletPoint img={tsLogo} title="Written in Typescript.">
          You shouldn't waste your time with chasing errors that static typing
          can handle. This is not a joke. TS is love. TS is life. The public
          APIs are also clean and readable.
        </HomeBulletPoint>
      </div>
    </div>
  );
};
