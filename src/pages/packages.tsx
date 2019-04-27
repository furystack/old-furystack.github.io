import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeContext } from "../context/theme-context";

export const Packages: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h5" style={{ color: theme.palette.text.primary }}>
        📦 Packages
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        FuryStack is a collection of NPM packages that can be used to build up
        your application <strong>layers</strong> from the data store to the
        communication layer.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/core
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        The entry-level logic (like store managers or server managers) and
        models (definition of the Physical Stores, users, roles) and some
        entry-level implementation (like InMemoryStore and FileStore for
        testing) sits here.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/repository
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        Repository is a collection of DataSets. A DataSet is like an extended
        version of a physical store. You can create/retrieve/update/delete
        entries, but in an authorized way. You can subscribe to events here as
        well.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/http-api
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        If you want to communicate with the world, this package will be your
        friend. You can configure the authentication, customize routing and
        implement custom actions using this package.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/odata-api
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        [OData](https://www.odata.org/) is a set of best practices for building
        and consuming RESTful APIs. You can create OData endpoints with
        FuryStack on a top of Data Stores easily. You can even open your
        endpoint in Excel :)
      </Typography>

      <hr />

      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        FuryStack also contains <strong>optional goodies</strong> that are not
        mandatory but can be useful for entry-level funcionality.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/typeorm-store
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        This package is a physical store implementation on the top of
        [TypeOrm](https://typeorm.io/#/). You can easily use PostgreSQL, SQLite,
        MSSql or MySQL in that way.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/auth-google
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        You can log in with a Google ID Token into a FuryStack backend with this
        simple package.
      </Typography>

      <hr />

      <Typography
        variant="subtitle1"
        style={{ color: theme.palette.text.primary }}
      >
        There are some useful <strong>utilities</strong> - they can be used in
        the front end aswell
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/logging
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        Logging is a powerful library that allows you to create log entries with
        scopes, levels and custom data and process them with a logic you'd like.
        You can collect telemetry or create a crash dump collector.
      </Typography>

      <Typography variant="h6" style={{ color: theme.palette.text.primary }}>
        @furystack/inject
      </Typography>
      <Typography
        variant="body1"
        style={{ color: theme.palette.text.secondary }}
      >
        Inject is a DI / IOC utility that allows you to handle your dependencies
        easily. In short terms - Just mark your services as `Injectable()` and
        use `injector.getInstance(...)` to retrieve them.
      </Typography>
    </div>
  );
};
