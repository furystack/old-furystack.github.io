import Typography from "@material-ui/core/Typography";
import { useContext, useEffect, useRef } from "react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme-context";

const Subheader: React.FunctionComponent<
  { href: string } & RouteComponentProps
> = ({ href, children, location }) => {
  const theme = useContext(ThemeContext);
  const elementRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current && window.location.hash === href) {
      console.log(elementRef.current);
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [location.hash]);

  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      <Typography
        ref={elementRef}
        variant="h4"
        style={{ color: theme.palette.text.primary, marginTop: "1em" }}
        gutterBottom={true}
        id={href.startsWith("#") ? href.substr(1) : undefined}
      >
        {children}
      </Typography>
    </Link>
  );
};

const routed = withRouter(Subheader);

export { routed as Subheader };
