import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { ExternalLink } from "../components/external-link";
import { InternalLink } from "../components/internal-link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const GuideHttpApi: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h3" style={{ color: theme.palette.text.primary }}>
        HTTP Api 🕸
      </Typography>
      <Subheader href="#core-concepts">Core concepts</Subheader>
      <TextBody>
        The HTTP API is responsible for starting a HTTP (or HTTPS) listener,
        catch incoming requests and execute custom actions based on the
        predefined routing strategies. It comes with built-in authentication
        (cookie-based and basic at the moment). <br />
        The configuration is similar to other layers, it works with a few
        extension methods on the Injector instance.{" "}
        <CodeSnippet>.useHttpApi()</CodeSnippet> is for basic configuration,{" "}
        <CodeSnippet>.useHttpAuthentication()</CodeSnippet> is for
        authentication setup and <CodeSnippet>.listenHttp()</CodeSnippet> will
        start a listener. You can check the{" "}
        <InternalLink to="/getting-started">Getting Started Guide</InternalLink>{" "}
        for a simple configuration example.
      </TextBody>
      <Subheader href="#custom-actions">Custom actions</Subheader>
      <TextBody>
        Custom Actions are simple injectable classes that should implement the{" "}
        <ExternalLink
          href="https://github.com/furystack/furystack/blob/master/packages/http-api/src/Models/IRequestAction.ts"
          target="_blank"
        >
          IRequestAction
        </ExternalLink>{" "}
        interface. They should be transient services. The framework will
        instantiate them and call their <CodeSnippet>exec()</CodeSnippet> method
        on a route hit. They can have a dispose() method for cleanup as well.{" "}
        <br />
        There are two important variable that can be injected and{" "}
        <i>will be used often</i> in custom actions: The{" "}
        <ExternalLink
          href="https://nodejs.org/api/http.html#http_class_http_incomingmessage"
          target="_blank"
        >
          IncomingMessage
        </ExternalLink>{" "}
        is the plain "request" object from NodeJs while the{" "}
        <ExternalLink
          href="https://nodejs.org/api/http.html#http_class_http_serverresponse"
          target="_blank"
        >
          ServerResponse
        </ExternalLink>{" "}
        is the NodeJs "response" object that will be sent to the client. You
        will have full control on both of them in the actions.
      </TextBody>
      <Subheader href="#custom-actions">Routing</Subheader>
      <Subheader href="#authentication">Authentication</Subheader>
    </div>
  );
};
