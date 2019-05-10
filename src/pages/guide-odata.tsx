import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export const GuideOdata: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        ✨ Odata
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        ToDo
        <ul>
          <li>/#why OData</li>
          <li>/#metadata</li>
          <li>/#endpoint</li>
          <li>/#entities</li>
          <li>/#collections</li>
          <li>/#custom actions and functions</li>
        </ul>
      </Typography>
    </div>
  );
};
