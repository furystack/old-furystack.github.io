import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { Link } from "../components/link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";
import { CodeSnippet } from "../components/code-snippet";
import { CodeTextArea } from "../components/code-text-area";

export const GuideDataStores: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary }}
        gutterBottom={true}
      >
        Data Stores 📦
      </Typography>
      <TextBody />

      <Subheader href="#store-setup">Physical Stores</Subheader>
      <TextBody>
        In FuryStack, the preferred mode of accessing data is via physical
        stores. A{" "}
        <Link
          href="https://github.com/furystack/furystack/blob/master/packages/core/src/Models/IPhysicalStore.ts"
          target="_blank"
        >
          physical store
        </Link>{" "}
        is a bare minimum interface that a store should do. A store is always
        bound to a collection with a specified type of entities. It can only do
        the basic CRUD operations (create, get by Id, filter, delete, count).
        These stores should not have a concept about relations, indexes and
        other storage-specific stuff. Data stores doesn't care about permission,
        role or session checking.
      </TextBody>

      <Subheader href="#store-setup">Setting up stores</Subheader>
      <TextBody>
        The setup is quite straightforward - create your entity class (the class
        itself will be used as a primary key and the fields for type checking)
        you can use the extension method called{" "}
        <CodeSnippet>.setupStores()</CodeSnippet> on the Injector:
      </TextBody>
      <CodeTextArea
        value={`
class MyEntity {
  public key!: number;
  public value!: string;
}

const myInjector = new Injector().setupStores(sm =>
  sm.addStore(new InMemoryStore({ model: MyEntity, primaryKey: "key" }))
);`}
      />

      <Subheader href="#basic-usage">Basic usage</Subheader>
      <TextBody>
        You can retrieve your store from any injector with{" "}
        <CodeSnippet>
          myInjector.getInstance(StoreManager).getStoreFor(MyEntity)
        </CodeSnippet>
        . You will receive an IPhysicalStore instance and you can do all the
        basic operations mentioned above.
      </TextBody>

      <Subheader href="#store-types">
        What type of store(s) should you choose?
      </Subheader>
      <TextBody>
        <ul>
          <li>
            <strong>InMemoryStore</strong> is the simplest implementation. Data
            won't be persisted. Supported out of the box, no hassle with
            additional dependencies. Can be used for e.g. storing user sessions
            or in a demo / experimental enviromnent
          </li>
          <li>
            <strong>FileStore</strong> is another simple implementation, it
            saves (and reloads) your data to files, however it's recommended to
            use only in development / experimental environments. Also supported
            out of the box.
          </li>
          <li>
            <Link
              href="https://www.npmjs.com/package/@furystack/typeorm-store"
              target="_blank"
            >
              typeorm-store
            </Link>{" "}
            is built on the top of the{" "}
            <Link href="https://typeorm.io/" target="_blank">
              TypeOrm
            </Link>{" "}
            package and you can create stores with all of it's supported DBs
            (MySQL / MariaDB / Postgres / CockroachDB / SQLite / Microsoft SQL
            Server / Oracle / sql.js at the moment). Recommended if you want to
            work with any supported SQL-based DB.
          </li>
          <li>
            <Link
              href="https://www.npmjs.com/package/@furystack/mongodb-store"
              target="_blank"
            >
              mongodb-store
            </Link>{" "}
            provides a store implementation for the famous document store.
            Simple yet powerful usage.
          </li>
          <li>
            <Link
              href="https://www.npmjs.com/package/@furystack/redis-store"
              target="_blank"
            >
              redis-store
            </Link>{" "}
            allows you to connect to a redis service. Useful is you want e.g.
            storing user sessions and keep them in sync between multiple web
            nodes. Altough searching is not supported...
          </li>
        </ul>
      </TextBody>
    </div>
  );
};
