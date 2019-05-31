import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export const ExternalLink: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = props => {
  const theme = useContext(ThemeContext);
  return (
    <a
      style={{ color: theme.palette.text.primary, ...props.style }}
      {...props}
    />
  );
};
