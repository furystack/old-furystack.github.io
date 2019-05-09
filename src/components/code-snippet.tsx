import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import React from "react";

export const CodeSnippet: React.FunctionComponent<{
  style?: React.CSSProperties;
}> = props => {
  const theme = useContext(ThemeContext);
  return (
    <code
      style={{
        color: theme.palette.text.primary,
        backgroundColor: "rgba(1, 1, 1, 0.12)",
        border: "1px solid rgba(0,0,0,.2)",
        borderRadius: "2px",
        padding: "0 0.5em",
        ...props.style
      }}
    >
      {props.children}
    </code>
  );
};
