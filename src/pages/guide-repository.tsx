import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { CodeTextArea } from "../components/code-text-area";
import { Link } from "../components/link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const GuideRepository: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Typography variant="h3" style={{ color: theme.palette.text.primary }}>
        Repository 🧬
      </Typography>
      <Subheader href="#example">An example </Subheader>
      <TextBody>
        To get a deeper understanding about the Repository layer and DataSets,
        let's start with a simple example:
      </TextBody>
      <CodeTextArea
        value={`
class MyEntity {
  public key!: number;
  public value!: string;
}

const myInjector = new Injector()
  .setupStores(sm =>
    sm.addStore(new InMemoryStore({ model: MyEntity, primaryKey: "key" }))
  )
  .setupRepository(repo =>
    repo.createDataSet(MyEntity, {
      onEntityAdded: async ({ entity }) => {
        console.log(\`New entity added: \${JSON.stringify(entity)}\`);
      },
      authorizeAdd: async ({ entity }) => {
        if (entity.value.length > 2)
          return {
            isAllowed: true
          };
        return {
          isAllowed: false,
          message: \`Failed to create entity. The value length should be greater than 2 but was \${
            entity.value.length
          }. Entity: \${JSON.stringify(entity)}\`
        };
      }
    })
  );

const dataSet = myInjector.getDataSetFor(MyEntity)
dataSet.add(myInjector, {key: 1, value: 'a'}) // Will fail
dataSet.add(myInjector, {key: 1, value: 'asd'}) // Will pass and will be logged to the console`}
      />
      <TextBody>
        In this example, we've created the Physical Store and configured a
        Repository. We've configured two additional settings:{" "}
        <CodeSnippet>onEntityAdded</CodeSnippet> is a callback that will be
        fired if an entity has been added to the DataSet while{" "}
        <CodeSnippet>authorizeAdd</CodeSnippet> is a check that validates the
        entity to be added. <br />
        There are several methods that you can use for authorizing CRUD
        operations. You can check the{" "}
        <Link
          href="https://github.com/furystack/furystack/blob/master/packages/repository/src/DataSetSettings.ts"
          target="_blank"
        >
          DataSet Settings
        </Link>{" "}
        to get the idea.
      </TextBody>
      <Subheader href="#events">Events</Subheader>
      <TextBody>
        Events are great for logging / monitoring DataSet changes or distribute
        changes to clients. They are simple <i>optional callbacks</i> - if they
        are defined, they will be called on a specific event. These events are{" "}
        <CodeSnippet>onEntityAdded</CodeSnippet>,{" "}
        <CodeSnippet>onEntityUpdated</CodeSnippet> and{" "}
        <CodeSnippet>onEntityRemoved</CodeSnippet>
      </TextBody>
      <Subheader href="#authorizing">Authorizing operations</Subheader>
      <TextBody>
        Authorizers are similar callbacks but they have to return a promise with
        an <CodeSnippet>IAuthorizationResult</CodeSnippet> object - you can
        allow or deny CRUD operations or add additional filters to collections
        with these Authorize callbacks. These are
        <CodeSnippet>authorizeAdd</CodeSnippet>,
        <CodeSnippet>authorizeUpdate</CodeSnippet>,
        <CodeSnippet>authorizeUpdateEntity</CodeSnippet> (this needs an
        additional reload of entity but can compare with the original one),
        <CodeSnippet>authorizeRemove</CodeSnippet>,
        <CodeSnippet>authroizeRemoveEntity</CodeSnippet> (also needs reloading),
        <CodeSnippet>authorizeGet</CodeSnippet>,
        <CodeSnippet>authorizeGetEntity</CodeSnippet> (also needs reloading),
      </TextBody>
      <Subheader href="#modifiers-additional-filters">
        Modifiers and additional filters
      </Subheader>
      <TextBody>
        There are some callbacks that modifies an entity before persisting (like{" "}
        <CodeSnippet>modifyOnAdd</CodeSnippet> or{" "}
        <CodeSnippet>modifyOnUpdate</CodeSnippet>). For example, you can fill
        createdByUser or lastModifiedByUser fields with these. <br />
        There is an additional property called{" "}
        <CodeSnippet>addFilter</CodeSnippet>, you can use that to <i>add</i> a
        pre-filter <i>before</i> a filter expression will be evaluated.
      </TextBody>
      <Subheader href="#context">Getting the Context</Subheader>
      <TextBody>
        All methods above has an <i>injector</i> instance on the call parameter
        - you can use that injector to get service instances from the right
        caller context. It means that you can use e.g.:{" "}
        <CodeSnippet>HttpUserContext</CodeSnippet> (see the details later) to
        getting the current user in the following way.
        <CodeTextArea
          value={`
authorizeAdd: async ({ injector }) => {
  const currentUser = await injector.getInstance(HttpUserContext).getCurrentUser()
  if (currentUser.roles.find(role => role.name === 'CanAddMyEntity'))
    return {
      isAllowed: true
    };
  return {
    isAllowed: false,
    message: "The user doesn't have the role 'CanAddMyEntity'"
  };
}`}
        />
      </TextBody>
    </div>
  );
};
