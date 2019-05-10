import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { CodeTextArea } from "../components/code-text-area";
import { Link } from "../components/link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const GuideInject: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "calc(100% - 2em)" }}>
      <Typography variant="h3" style={{ color: theme.palette.text.primary }}>
        Inject 💉
      </Typography>
      <TextBody>
        FuryStack is heavily built on DI and IOC concepts. It has an own DI/IOC
        implementation that sits in the{" "}
        <Link
          href="https://www.npmjs.com/package/@furystack/inject"
          target="_blank"
        >
          @furystack/inject
        </Link>{" "}
        NPM package. You can use the full functionality in NodeJs and in the
        browser as well, even in a{" "}
        <Link
          href="https://github.com/gallayl/redux-di-middleware"
          target="_blank"
        >
          Redux middleware
        </Link>
        😉 <br />
        The installation is quite straightforward, you can run{" "}
        <CodeSnippet>npm i @furystack/inject</CodeSnippet> or{" "}
        <CodeSnippet>yarn add @furystack/inject</CodeSnippet> and you're done.
      </TextBody>
      <Subheader href="#injectable-services">Injectable services</Subheader>
      <TextBody>
        An injectable service is basically a <i>class</i>, decorated with the{" "}
        <CodeSnippet>@Injectable()</CodeSnippet> decorator. If you decorate a
        class, its injectable options (e.g. <i>lifetime</i>) and constructor
        argument types will be stored and the injector will be able to
        instantiate a new instance any time. Constructor arguments should be
        also injectable services and they will be resolved recursively. Take a
        look at the following example and you'll get the idea:
        <CodeTextArea
          value={`const i = new Injector()
@Injectable()
class Service1 {
  constructor(public service2: Service2, public service3: Service3) {}
}
@Injectable()
class Service2 {
  public value = 'foo'
}
@Injectable()
class Service3 {
  public value = 'bar'
}
expect(i.getInstance(Service1).service2.value).toBe('foo')
expect(i.getInstance(Service1).service2.value).toBe('bar')`}
        />
        All of the 3 classes are decorated as an injectable service. If you
        request an instance of 'Service1', the framework will also provide an
        instance of the two dependencies as well.
      </TextBody>

      <Subheader href="#injector">Injector</Subheader>
      <TextBody>Injector</TextBody>

      <Subheader href="#lifecycles">Lifecycles</Subheader>
      <TextBody>singleton, transient, scoped</TextBody>

      <Subheader href="#scopes">Scopes</Subheader>
      <TextBody>createChild</TextBody>

      <Subheader href="#extension-methods">Extension methods</Subheader>
      <TextBody />

      <Subheader href="#misc">A few things to care about</Subheader>
      <TextBody>
        circular imports (undefined), circular dependencies, lifecycle
        dependencies
      </TextBody>
    </div>
  );
};
