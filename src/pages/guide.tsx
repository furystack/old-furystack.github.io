import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const Guide: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        📜Guide
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        ToDo: Guide Overview Content
        <ul>
          <li>💉/inject </li>
          <li>📦/data-stores </li>
          <li>🧬/repository </li>
          <li>🕸/http-api </li>
          <li>✨/odata </li>
          <li>💬/websocket-api </li>
          <li>📃/logging </li>
        </ul>
      </Typography>
    </div>
  );
};
