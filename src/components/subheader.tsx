import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../context/theme-context";
export const Subheader: React.FunctionComponent<{ href: string }> = ({
  href,
  children
}) => {
  const theme = useContext(ThemeContext);
  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <Typography
        variant="h4"
        style={{ color: theme.palette.text.primary, marginTop: "1em" }}
        gutterBottom={true}
      >
        {children}
      </Typography>
    </a>
  );
};
