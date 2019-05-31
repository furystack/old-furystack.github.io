import React, { useContext } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ThemeContext } from "../context/theme-context";

export const InternalLink: React.FunctionComponent<LinkProps> = props => {
  const theme = useContext(ThemeContext);
  return (
    <Link
      style={{ color: theme.palette.text.primary, ...props.style }}
      {...props}
    />
  );
};
