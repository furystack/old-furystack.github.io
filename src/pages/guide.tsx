import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { ExternalLink } from "../components/external-link";
import { InternalLink } from "../components/internal-link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const Guide: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "calc(100% - 2em)" }}>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary }}
        gutterBottom={true}
      >
        Guide to the layers of Fury
      </Typography>
      <TextBody>
        This little guide will hopefully help you to understand what FuryStack
        is (and what is not...), explain the core concepts of the APIs and the
        packages, why is it soo coool, opens up your third eye and helps your
        soul's salvation. <br /> There is no silver bullet so don't take it too
        seriously &nbsp; 🖤
      </TextBody>
      <Subheader href="/guide/inject">Dependency injection 💉</Subheader>
      <TextBody>
        <ExternalLink
          href="https://en.wikipedia.org/wiki/Dependency_injection"
          target="_blank"
        >
          Dependency injection
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink
          href="https://en.wikipedia.org/wiki/Inversion_of_control"
          target="_blank"
        >
          Inversion of control
        </ExternalLink>{" "}
        is a common practice that tries to protect you from insanity that would
        happen when you realize that you can't refactor and test a giant global
        static app structure.{" "}
        <ExternalLink
          href="https://www.npmjs.com/package/@furystack/inject"
          target="_blank"
        >
          @furystack/inject
        </ExternalLink>{" "}
        is a simple but powerful tool that you can use in NodeJs and in the
        browser. An extendable fluent API is also attached to injectors - you
        can configure almost your whole stack with it. &nbsp;
        <InternalLink to="/guide/inject">Learn more...</InternalLink>
      </TextBody>

      <Subheader href="/guide/data-stores/">Data Stores 📦</Subheader>
      <TextBody>
        Where should you store your data? SQL, NOSQL, InMemory or on a sticky
        note on the back of your pillow? In FuryStack, there is an ultimate
        answer: <i>it depends</i>😉. You can choose between MongoDB, TypeORM,
        Redis, in a file system and for plain in-memory store - or you can
        implement your own PhysicalStore - it won't be so hard. You can also use
        multiple store types per app. &nbsp;
        <InternalLink to="/guide/data-stores">Learn more...</InternalLink>
      </TextBody>

      <Subheader href="/guide/repository">Repository 🧬</Subheader>
      <TextBody>
        A Repository is the next layer above the data stores. When setting up a
        repository, you can create <i>DataSets</i> that can use a previously
        configured physical store. The difference is that while PhysicalStore
        focuses on the data, DataSet focuses on business logic. You can
        authorize, check permissions, subscribe to entity changes, etc... &nbsp;
        <InternalLink to="/guide/repository">Learn more...</InternalLink>
      </TextBody>

      <Subheader href="/guide/http-api">Http API 🕸</Subheader>
      <TextBody>
        You can work with data, you can implement some business logic, it's time
        to communicate with the rest of the world. The straightforward answer is
        HTTP, so let's make some custom actions, configure routing and take a
        look at the built-in HTTP authentication. &nbsp;
        <InternalLink to="/guide/http-api">Learn more...</InternalLink>
      </TextBody>

      <Subheader href="">More docs are coming soon</Subheader>
      <Typography>
        <ul>
          <li>✨ OData </li>
          <li>💬 Websocket-api </li>
          <li>📃 Logging </li>
        </ul>
      </Typography>
    </div>
  );
};
