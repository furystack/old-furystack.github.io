import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const GuideInject: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        💉 Inject
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        ToDo: Guide Overview Content /#basics /#lifecycles /#extension-methods
        <ul>
          <li>/#basics</li>
          <li>/#lifecycles</li>
          <li>/#extension-methods</li>
        </ul>
      </Typography>
    </div>
  );
};
