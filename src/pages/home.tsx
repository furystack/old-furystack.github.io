import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const Home: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        FuryStack is a flexible framework that allows you to build complex
        services fast and easily.
      </Typography>
      <Typography
        variant="body1"
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
