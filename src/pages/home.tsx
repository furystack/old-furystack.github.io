import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import gettingStarted from "../images/getting-started.jpg";
import packages from "../images/packages.jpg";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const Home: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary, textAlign: "center" }}
      >
        FuryStack is a flexible framework that allows you to build complex
        backend services fast and easily.
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        <Card style={{ width: 350, margin: "1em 2em" }}>
          <Link
            to="/packages"
            style={{ color: "initial", textDecoration: "initial" }}
          >
            <CardActionArea>
              <CardMedia
                style={{ height: 220, minWidth: 350 }}
                component="img"
                image={packages}
                title="Getting Started"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Packages
                </Typography>
                <Typography component="p">
                  Check out the NPM package of each layer of fury. Even the
                  dachshund will be enraged.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card style={{ width: 350, margin: "1em 2em" }}>
          <CardActionArea
            onClick={() =>
              window.open(
                "https://github.com/furystack/furystack/tree/master/examples/repository",
                "_blank"
              )
            }
          >
            <CardMedia
              style={{ height: 220, minWidth: 350 }}
              component="img"
              image={gettingStarted}
              title="Getting Started"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Getting started
              </Typography>
              <Typography component="p">
                Check out the example repository. More detailed onboarding docs
                coming soon. Honestly.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.secondary }}
      >
        <ul>
          <li>
            Written in Typescript. The public APIs are clean and readable.
          </li>
          <li>
            The Core is built on a top of native Node calls. Dependencies are
            carefully selected.
          </li>
          <li>
            You can create a backend in minutes with authentication, data
            stores, custom actions and ODdata without 3rd party packages. You
            don't have to waste your time looking for packages for entry-level
            functionality
          </li>
          <li>
            You can create and use your own custom actions, websocket calls,
            data store or logger easily
          </li>
          <li>
            You can use some of the packages (logger and inject at the moment)
            on the frontend as well
          </li>
        </ul>
      </Typography>
    </div>
  );
};
