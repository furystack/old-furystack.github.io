import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import tsLogo from "../images/ts_logo.png";
import fryingPan from "../images/frying_pan.png";
import hiddenBlade from "../images/hidden_blade.jpg";
import jabba from "../images/jabba.png";
import roach from "../images/roach.jpg";
import falcon from "../images/falcon.png";

export const HomeBulletPoint: React.FunctionComponent<{
  img?: string;
}> = props => {
  return (
    <div
      style={{
        minWidth: 250,
        maxWidth: 400,
        margin: "1em 2em",
        textAlign: "justify",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img
        width={128}
        height={128}
        src={props.img}
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: 5,
          borderRadius: 6
        }}
      />
      <div>{props.children}</div>
    </div>
  );
};

export const Home: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography
        variant="h5"
        style={{
          color: theme.palette.text.primary,
          textAlign: "center"
        }}
      >
        FuryStack is a flexible framework that allows you to build complex
        backend services fast and easily.
      </Typography>

      <div style={{ margin: "5em", display: "flex", justifyContent: "center" }}>
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

      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.secondary }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flexDirection: "row"
          }}
        >
          <HomeBulletPoint img={falcon}>
            <strong>Rapid development. </strong> You can create a backend
            microservice in minutes with authentication, data stores, custom
            actions and ODdata without 3rd party packages.
          </HomeBulletPoint>
          <HomeBulletPoint img={roach}>
            <strong>Contains all you need for the start.</strong> You don't have
            to waste your time looking after packages for entry-level
            functionality
          </HomeBulletPoint>
          <HomeBulletPoint img={jabba}>
            <strong>No more bloated dependencies.</strong> The Core is built on
            a top of native NodeJS calls. All of the dependencies are carefully
            selected and maintained.
          </HomeBulletPoint>
          <HomeBulletPoint img={hiddenBlade}>
            <strong>Easy to extend. </strong> You can create and use your own
            custom actions, websocket calls or implement your custom data store
            or logger
          </HomeBulletPoint>
          <HomeBulletPoint img={fryingPan}>
            <strong>Cross platform. </strong> You can run it where NodeJs runs.
            Even on a frying pan. You can use some of the packages (logger,
            inject) on the frontend as well
          </HomeBulletPoint>
          <HomeBulletPoint img={tsLogo}>
            <strong>Written in Typescript.</strong> You shouldn't waste your
            time with chasing errors that static typing can handle. This is not
            a joke. The public APIs are clean and readable.
          </HomeBulletPoint>
        </div>
      </Typography>
    </div>
  );
};
