import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../context/theme-context";

export const TextBody: React.FunctionComponent = props => {
  const theme = useContext(ThemeContext);

  return (
    <Typography
      variant="subtitle1"
      style={{ color: theme.palette.text.secondary }}
      gutterBottom={true}
    >
      {props.children}
    </Typography>
  );
};
