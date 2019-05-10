import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export const GuideWebsocketApi: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        💬 WebSocket API
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        ToDo
      </Typography>
    </div>
  );
};
