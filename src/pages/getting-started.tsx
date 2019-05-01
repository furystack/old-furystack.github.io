import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const GettingStarted: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ maxWidth: 800 }}>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        🐣 Getting Started
      </Typography>
      <a href="#install">
        <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
          Install
        </Typography>
      </a>
      <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
        The only and one prerequisite is that you need Node.JS installed on your
        computer. The latest LTS version is recommended. You should create a
        project directory and you can initialize a new NPM project with
        <code style={{ display: "block", margin: "1em 0" }}>npm init</code>
      </Typography>
      <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
        Once you have completed the initialization, you have to install a few
        dependencies: <br />
        <code style={{ display: "block", margin: "1em 0" }}>
          npm install typescript ts-node tslib @furystack/core
          @furystack/http-api
        </code>
        With these two steps you've completed the installation. Congrats. 🤝
      </Typography>

      <a href="#hello-world">
        <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
          A Hello World app
        </Typography>
      </a>

      <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
        Next, we will create a backend with an in-memory user store that will
        have login, logout and getCurrentUser as default actions. Let's start
        with creating the <strong>index.ts</strong> file in the application
        root. The following snippet will be the whole implementation itself:
      </Typography>
      <textarea
        style={{
          height: 400,
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
  .useHttpAuthentication({})
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
    </div>
  );
};
