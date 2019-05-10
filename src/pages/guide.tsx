import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { Link } from "../components/link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const Guide: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "calc(100% - 2em)" }}>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        📜Guide
      </Typography>
      <Subheader href="/guide-inject">@furystack/inject 💉</Subheader>
      <TextBody>
        <Link
          href="https://en.wikipedia.org/wiki/Dependency_injection"
          target="_blank"
        >
          Dependency injection
        </Link>{" "}
        and{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Inversion_of_control"
          target="_blank"
        >
          Inversion of control
        </Link>{" "}
        is a common practice that tries to protect you from insanity that would
        happen when you realize that you can't refactor and test a giant global
        static app structure.{" "}
        <Link
          href="https://www.npmjs.com/package/@furystack/inject"
          target="_blank"
        >
          @furystack/inject
        </Link>{" "}
        is a simple but powerful tool that you can use in NodeJs and in the
        browser. <Link href="/guide-inject">Learn more...</Link>
      </TextBody>
      <Subheader href="">More docs are coming soon about</Subheader>
      <Typography>
        <ul>
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
