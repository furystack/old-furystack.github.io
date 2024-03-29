import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { CodeTextArea } from "../components/code-text-area";
import { ExternalLink } from "../components/external-link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const GettingStarted: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "calc(100% - 2em)", justifySelf: "center" }}>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary }}
        gutterBottom={true}
      >
        Getting Started 🐣
      </Typography>
      <TextBody>
        In the following example, we will initialize an NPM project, install
        some minimal dependencies and implement a simple backend application.
      </TextBody>
      <Subheader href="#install">Install 💿</Subheader>
      <TextBody>
        The only and one prerequisite is that you need Node.JS installed on your
        computer. The latest LTS version is recommended. You should create a
        project directory and you can initialize a new NPM project with
        <CodeSnippet
          style={{
            display: "block",
            margin: "1em 0"
          }}
        >
          npm init
        </CodeSnippet>
      </TextBody>
      <TextBody>
        Once you have completed the initialization, you have to install a few
        dependencies: <br />
        <CodeSnippet
          style={{
            display: "block",
            margin: "1em 0"
          }}
        >
          npm install typescript ts-node tslib @furystack/core
          @furystack/http-api
        </CodeSnippet>
        With these two steps you've completed the installation. Congrats. 😎🤝
        You can jump right into the implementation.
      </TextBody>

      <Subheader href="#app-structure">
        A basic application structure 🏛
      </Subheader>
      <TextBody>
        Next, we will create a backend with an in-memory user store that will
        have login, logout and getCurrentUser as default actions. First, we have
        to initialize Typescript with the <CodeSnippet>tsc --init</CodeSnippet>{" "}
        command. You should also enable "experimentalDecorators" and
        "emitDecoratorMetadata" in your tsconfig.json. You should also enable
        including all of the ts files in your project root with adding{" "}
        <CodeSnippet> "include": ["."]</CodeSnippet> in your tsconfig.
        <br /> Let's continue with creating the <strong>index.ts</strong> file
        in the application root. In the following snippet, we will:
        <ul>
          <li>Import stuff that we'll use from @furystack packages</li>
          <li>Create a new Injector instance</li>
          <li>
            Set up Logging - log messages will be written on the console for now
            with the provided ConsoleLogger.
          </li>
          <li>
            Initialize the HTTP API with the default settings. You can set up
            CORS, your custom routing and actions here.
          </li>
          <li>
            Initialize the HTTP Authentication. Users and sessions will be
            stored in an in-memory data store by default. You can configure
            custom User store, model, sessions, cookie, password hashing and
            session store here later
          </li>
          <li>
            Register the default Login routes (login, logout and
            getCurrentUser). They are built-in actions with a default routing
            logics, nothing fancy here.
          </li>
          <li>
            Start the server at{" "}
            <ExternalLink href="http://localhost:654" target="_blank">
              http://localhost:654
            </ExternalLink>{" "}
            by default. You can configure the port with an environment variable
            as well.
          </li>
          <li>
            Retrieve an User store from StoreManager and add a Test User (we
            have to do this on each start, remember, it's only an In Memory
            store😉)
          </li>
        </ul>
        And now, the code snippet:
      </TextBody>
      <CodeTextArea
        value={`const injector = new Injector()
  .useLogging(ConsoleLogger)
  .useHttpApi()
  .useHttpAuthentication()
  .useDefaultLoginRoutes()
  .listenHttp({
    port: (process.env.PORT && parseInt(process.env.PORT)) || 654
  });

const authSettings = injector.getInstance(HttpAuthenticationSettings);

injector
  .getInstance(StoreManager)
  .getStoreFor(User)
  .add({
    username: "testuser",
    roles: [],
    password: authSettings.hashMethod("testPassword")
  } as User);`}
      />
      <TextBody>
        Now, after saving your index.ts file, you can start the server with the
        following command:
        <CodeSnippet
          style={{
            display: "block",
            margin: "1em 0"
          }}
        >
          .\node_modules\.bin\ts-node index.ts
        </CodeSnippet>
        It will start your app with a few log messages and you can open it in
        the browser. On the main page you'll get an&nbsp;
        <CodeSnippet>{`{"Error":"Content not found","url":"/"}`}</CodeSnippet>{" "}
        message - you haven't set up custom routes, only the default login
        routes.
      </TextBody>
      <Subheader href="#authentication">
        Authentication, authorization 🔑
      </Subheader>
      <TextBody>
        You can also try them out now. <br />
        If you open{" "}
        <ExternalLink href="http://localhost:654/currentUser" target="_blank">
          http://localhost:654/currentUser
        </ExternalLink>
        , you'll see that by default you will be a Visitor user without roles.
        You can authenticate your request in two ways in this example
        application - both can be achieved easily with&nbsp;
        <ExternalLink href="https://www.getpostman.com/" target="_blank">
          Postman
        </ExternalLink>
        .
        <ul>
          <li>
            You can set up basic authentication headers - with a predefined
            username and password - and re-send the request. If you've provided
            the correct credentials, the user will be updated
          </li>
          <li>
            You can send a POST request to <CodeSnippet>'/login'</CodeSnippet>{" "}
            with the following post body:
            <CodeSnippet
              style={{ display: "block", margin: ".3em 0" }}
            >{`{"username": "testuser", "password": "password"}`}</CodeSnippet>
            You will get a session cookie (called 'fss' by default) that will
            authenticate you with the next request. You can invalidate the
            session and remove the cookie by posting to the{" "}
            <CodeSnippet>'/logout'</CodeSnippet> API endpoint.
          </li>
        </ul>
        <br />
      </TextBody>
      <Subheader href="#hello-world-action">
        Say 'Hi' from a custom action 🙋‍
      </Subheader>
      <TextBody>
        We will implement a new custom 'Hello World' action. Stop your
        application (ctrl+c in the console) and create a new file called
        'hello-world-action.ts' next to your 'index.ts':
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
        The action implementation is quite straightforward. We should implement
        an IRequestAction (dispose() and exec() is mandatory). We can use
        constructor dependency injection for getting the ServerResponse (we
        should also use IncomingMessage) from Node.JS and a built-in service for
        authentication from FuryStack.
        <br />
        We should set up a routing logic for our custom action. To do that, we
        should add some imports:
        <CodeSnippet>
          import {`{ HelloWorldAction }`} from './hello-world-action'
          <br />
          import {`{ parse }`} from "url"; <br />
        </CodeSnippet>{" "}
        at the top of our index.ts and add the following snippet right after{" "}
        <code>'.useDefaultLoginRoutes()'</code>:
        <CodeTextArea
          value={`    .addHttpRouting(i => {
    const urlPathName = parse(i.getRequest().url || "", true).pathname;
    if (urlPathName === "/helloWorld") {
      return HelloWorldAction;
    }
  })`}
        />
        Restart your application and send a request to{" "}
        <ExternalLink href="http://localhost:654" target="_blank">
          http://localhost:654
        </ExternalLink>
        . You will get a plain text response with the 'Hello Visitor!' text from
        your newly created action.
      </TextBody>
      <Subheader href="#summary">Summary</Subheader>
      <TextBody>
        Let's sum up what we've done in this example:
        <ul>
          <li>
            A basic backend application with an in-memory store, logging,
            authentication and custom routing - from about ~32 lines of code
          </li>
          <li>A custom HelloWorld action - from about ~12 lines of code</li>
        </ul>
        One of the main goal of FuryStack is to give a clean and
        easy-to-understand, but also flexible and expandable API set for
        building application backends - from microservices to the
        enterprise-level.
      </TextBody>
      <TextBody>
        The following example is also available in{" "}
        <ExternalLink
          href="https://github.com/furystack/hello-world-app"
          target="_blank"
        >
          this
        </ExternalLink>{" "}
        Github repository, or you can check it online in{" "}
        <ExternalLink
          href="https://glitch.com/~furystack-hello-world-app"
          target="_blank"
        >
          Glitch
        </ExternalLink>
        .
      </TextBody>
      <TextBody>
        Thanks for reading the first tutorial, don't hesitate to give some
        feedback 😉
      </TextBody>
      <div
        className="fb-comments"
        {...{
          "data-href": "https://furystack.github.io/getting-started.html",
          "data-width": "800",
          "data-numposts": "15",
          "data-colorscheme": "dark"
        }}
      />
    </div>
  );
};
