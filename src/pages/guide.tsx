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
      <Subheader href="/guide/inject">
        DI / IOC with @furystack/inject 💉
      </Subheader>
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
        browser. <Link href="/guide/inject">Learn more...</Link>
      </TextBody>

      <Subheader href="/guide/data-stores/">Data Stores 📦</Subheader>
      <TextBody>
        Where should you store your data? SQL, NOSQL, InMemory or on a sticky
        note on the back of your pillow? In FuryStack, there is an ultimate
        answer: <i>it depends</i>😉. You can choose between MongoDB, TypeORM,
        Redis, in a file system and for plain in-memory store - or you can
        implement your own PhysicalStore - it won't be so hard. You can also use
        multiple store types per app. &nbsp;
        <Link href="/guide/data-stores">Learn more...</Link>
      </TextBody>

      <Subheader href="/guide/repository">Repository 🧬</Subheader>
      <TextBody>
        A Repository is the next layer above the data stores. When setting up a
        repository, you can create <i>DataSets</i> that can use a previously
        configured physical store. The difference is that while PhysicalStore
        focuses on the data, DataSet focuses on business logic. You can
        authorize, check permissions, subscribe to entity changes, etc... &nbsp;
        <Link href="/guide/repository">Learn more...</Link>
      </TextBody>

      <Subheader href="">More docs are coming soon about</Subheader>
      <Typography>
        <ul>
          <li>/repository </li>
          <li>🕸/http-api </li>
          <li>✨/odata </li>
          <li>💬/websocket-api </li>
          <li>📃/logging </li>
        </ul>
      </Typography>
    </div>
  );
};
