import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const GuideDataStores: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        📦 Data Stores
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
