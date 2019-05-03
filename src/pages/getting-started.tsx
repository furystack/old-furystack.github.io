import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const GettingStarted: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ maxWidth: 800, justifySelf: "center" }}>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary }}
        gutterBottom={true}
      >
        Getting Started 🐣
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.secondary }}
        gutterBottom={true}
      >
        In the following example, we will initialize an NPM project, install
        some minimal dependencies and implement a simple backend application.
      </Typography>
      <a href="#install" style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          style={{ color: theme.palette.text.primary, marginTop: "1em" }}
          gutterBottom={true}
        >
          Install 💿
        </Typography>
      </a>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        The only and one prerequisite is that you need Node.JS installed on your
        computer. The latest LTS version is recommended. You should create a
        project directory and you can initialize a new NPM project with
        <code
          style={{
            display: "block",
            margin: "1em 0",
            color: theme.palette.text.primary
          }}
        >
          npm init
        </code>
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        Once you have completed the initialization, you have to install a few
        dependencies: <br />
        <code
          style={{
            display: "block",
            margin: "1em 0",
            color: theme.palette.text.primary
          }}
        >
          npm install typescript ts-node tslib @furystack/core
          @furystack/http-api
        </code>
        With these two steps you've completed the installation. Congrats. 😎🤝
        You can jump right into the implementation.
      </Typography>

      <a href="#hello-world" style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          style={{ color: theme.palette.text.primary, marginTop: "1em" }}
          gutterBottom={true}
          component="h4"
        >
          A Hello World App
        </Typography>
      </a>

      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        Next, we will create a backend with an in-memory user store that will
        have login, logout and getCurrentUser as default actions. Let's start
        with creating the <strong>index.ts</strong> file in the application
        root. In the following snippet, we will:
        <ul>
          <li>Import stuff that we'll use from @furystack packages</li>
          <li>Create a new Injector instance</li>
          <li>
            Set up Logging - log messages will be written on the console for now
            with the default ConsoleLogger.
          </li>
          <li>
            Set up the Stores - we will create an in-memory store for Users for
            now
          </li>
          <li>
            Initialize the HTTP API with the default settings. You can set up
            CORS, your custom routing and actions here.
          </li>
          <li>
            Initialize the HTTP Authentication with the User store we've just
            created. You can configure custom User model, cookie, password
            hashing and session store here later
          </li>
          <li>
            Register the default Login routes (login, logout and
            getCurrentUser). They are built-in actions with a default routing
            logics, nothing fancy here.
          </li>
          <li>
            Start the server at{" "}
            <a
              style={{ color: theme.palette.text.primary }}
              href="http://localhost:654"
              target="_blank"
            >
              http://localhost:654
            </a>
          </li>
          <li>
            Retrieve an User store from StoreManager and add a Test User (we
            have to do this on each start, remember, it's only an In Memory
            store😉)
          </li>
        </ul>
        And now, the code snippet:
      </Typography>
      <textarea
        style={{
          height: 375,
          width: "100%",
          background: "transparent",
          fontFamily: "monospace",
          color: theme.palette.text.disabled,
          outline: "none",
          padding: 3,
          margin: "2em 0"
        }}
        readOnly={true}
        defaultValue={`import { Injector } from "@furystack/inject";
import { ConsoleLogger } from "@furystack/logging";
import { InMemoryStore, User, StoreManager } from "@furystack/core";
import { HttpAuthenticationSettings } from "@furystack/http-api";

const injector = new Injector()
  .useLogging(ConsoleLogger)
  .setupStores(stores =>
    stores.addStore(new InMemoryStore({ model: User, primaryKey: "username" }))
  )
  .useHttpApi()
  .useHttpAuthentication({
    getUserStore: sm => sm.getStoreFor(User)
  })
  .useDefaultLoginRoutes()
  .listenHttp({ hostName: "localhost", port: 654 });

const authSettings = injector.getInstance(HttpAuthenticationSettings);

injector
  .getInstance(StoreManager)
  .getStoreFor(User)
  .add({
    username: "testuser",
    roles: [],
    password: authSettings.hashMethod("testPassword")
  } as User);
`}
      />
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        Now, after saving your index.ts file, you can start the server with the
        following command:
        <code
          style={{
            display: "block",
            margin: "1em 0",
            color: theme.palette.text.primary
          }}
        >
          .\node_modules\.bin\ts-node index.ts
        </code>
        It will start your app with a few log messages and you can open it in
        the browser. On the main page you'll get an&nbsp;
        <code>{`{"Error":"Content not found","url":"/"}`}</code> message - you
        haven't set up custom routes, only the default login routes. You can
        also try them out now. <br />
        If you open{" "}
        <a
          href="http://localhost:654/currentUser"
          target="_blank"
          style={{ color: theme.palette.text.primary }}
        >
          http://localhost:654/currentUser
        </a>
        , you'll see that you are a Visitor user without roles. You can log in
        with two ways in this example application - both can be achieved easily
        with{" "}
        <a
          href="https://www.getpostman.com/"
          target="_blank"
          style={{ color: theme.palette.text.primary }}
        >
          Postman
        </a>
        . <br />
        You can set up basic authentication headers - with a predefined username
        and password - and re-send the request. The user will be updated
        <br />
        You can send an another POST request to '/login' with the username and
        password in the body
      </Typography>
    </div>
  );
};
