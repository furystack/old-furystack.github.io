import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const GuideHttpApi: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        🕸 HTTP Api
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        <ul>
          <li>/#authentication</li>
          <li>/#routing</li>
          <li>/#custom-actions</li>
        </ul>
      </Typography>
    </div>
  );
};
