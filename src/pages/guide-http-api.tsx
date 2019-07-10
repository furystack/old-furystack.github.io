import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { CodeTextArea } from "../components/code-text-area";
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
        Custom Actions are simple methods with the type of{" "}
        <ExternalLink
          href="https://github.com/furystack/furystack/blob/master/packages/http-api/src/Models/RequestAction.ts"
          target="_blank"
        >
          RequestAction
        </ExternalLink>
        . It will be called with an Injector instance and should return an
        ActionResult object. The HTTP API framework will call them on a route
        hit.
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
        will have full control on both of them in the actions. Here's an example
        (taken from the{" "}
        <ExternalLink
          href="https://github.com/furystack/hello-world-app"
          target="_blank"
        >
          Hello World app
        </ExternalLink>
        )
        <CodeTextArea
          value={`import {
  PlainTextResult,
  RequestAction,
  HttpUserContext
} from "@furystack/http-api";

export const HelloWorldAction: RequestAction = async injector => {
  const currentUser = await injector
    .getInstance(HttpUserContext)
    .getCurrentUser();
  return PlainTextResult(\`Hello \${currentUser.username}!\`);
};
 `}
        />
      </TextBody>
      <Subheader href="#custom-actions">Routing</Subheader>
      <TextBody>
        There is a simple yet powerful routing mechanism that works with the{" "}
        <CodeSnippet>.addHttpRouting()</CodeSnippet> extension method on the
        Injector. Each and every statement will add a <i>routing strategy</i>.
        These callbacks will be fired with the actual injector object and should
        return a RequestAction method declaration on hit. <br />
        <strong>Warning: The order matters!</strong> The first strategy that has
        a hit, will take the request.
      </TextBody>
      <Subheader href="#authentication">Authentication</Subheader>
      <TextBody>
        You can configure the HTTP authentication with the{" "}
        <CodeSnippet>.useHttpAuthentication()</CodeSnippet> extension method.
        You can also define whitch store to use for sessions and for users.{" "}
        <br />
        There is also an extension method to set up the default session routes
        (.useDefaultLoginRoutes()), it registers routes for '/login', '/logout'
        and '/currentUser'
      </TextBody>
    </div>
  );
};
