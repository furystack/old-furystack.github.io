import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { CodeTextArea } from "../components/code-text-area";
import { ExternalLink } from "../components/external-link";
import { InternalLink } from "../components/internal-link";
import { Subheader } from "../components/subheader";
import { TextBody } from "../components/text-body";
import { ThemeContext } from "../context/theme-context";

export const GuideInject: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "calc(100% - 2em)" }}>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary }}
        gutterBottom={true}
      >
        DI / IOC with @furystack/inject 💉
      </Typography>
      <TextBody>
        FuryStack is heavily built on DI and IOC concepts. It has an own DI/IOC
        implementation that sits in the{" "}
        <ExternalLink
          href="https://www.npmjs.com/package/@furystack/inject"
          target="_blank"
        >
          @furystack/inject
        </ExternalLink>{" "}
        NPM package. You can use the full functionality in NodeJs and in the
        browser as well, even in a{" "}
        <ExternalLink
          href="https://github.com/gallayl/redux-di-middleware"
          target="_blank"
        >
          Redux middleware
        </ExternalLink>
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
          value={`const injector = new Injector()
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
expect(injector.getInstance(Service1).service2.value).toBe('foo')
expect(injector.getInstance(Service1).service2.value).toBe('bar')`}
        />
        All of the 3 classes are decorated as an injectable service. If you
        request an instance of 'Service1', the framework will also provide an
        instance of the two dependencies as well.
      </TextBody>

      <Subheader href="#injector">Injector</Subheader>
      <TextBody>
        An <i>injector</i> is basically an extendable container that
        instantiates services with dependencies and handles their lifecycles.
        The most used and most important method is the{" "}
        <CodeSnippet>injector.getInstance(MyServiceClass)</CodeSnippet> that
        returns with an instance from a requested service. Injectors are smart
        enough to handle lifecycles (e.g. "singleton" services will be
        constructed once per injector).
        <br />
        You can create multiple injectors in your project, they can act as
        multiple separated "global" containers.
        <br />
        You can also organize injectos in a tree structure in the following way:
        <CodeTextArea
          value={`const childInjector = injector.createChild({ owner: 'myCustomContext' })
`}
        />
        Creating child injectors can be useful if you want to store contextual
        data (e.g. a per-http-request context that should be initialized once)
      </TextBody>

      <Subheader href="#lifecycles">Lifecycles</Subheader>
      <TextBody>
        The package defines four types of lifecycle:
        <ul>
          <li>
            <strong>Transient</strong> injectables are not cached - if you
            request an instance, you will get a new one every time.
          </li>
          <li>
            <strong>Scoped</strong> injectables are cached, but only on the
            current level. If a service has been created in a current injector,
            the existing instance will be returned.
          </li>
          <li>
            <strong>Singleton</strong> injectables are created on the{" "}
            <i>root</i> injector. If you request a singleton, the injector will
            check create the instance in it's highest parent - and also returns
            it from there, if already exists.
          </li>
          <li>
            <strong>Explicit</strong> values are not really injectables - you
            can call{" "}
            <CodeSnippet>
              injector.setExplicitInstance(myServiceInstance)
            </CodeSnippet>{" "}
            to set up an instance manually. Just like scoped services, explicit
            instances will be returned from the current scope only.
          </li>
        </ul>
      </TextBody>

      <Subheader href="#extension-methods">Extension methods</Subheader>
      <TextBody>
        A simple injector can easily extended from 3rd party packages with
        extension methods, just like the FuryStack packages. These extension
        methods usually provides a shortcut of an instance or sets up a
        preconfigured explicit instance of a service. You can build clean and
        nice fluent API-s in that way - you can check a{" "}
        <ExternalLink
          href="https://github.com/furystack/furystack/blob/master/packages/logging/src/InjectorExtension.ts"
          target="_blank"
        >
          code example
        </ExternalLink>{" "}
        or take a look at the{" "}
        <InternalLink to="/getting-started">Getting stated</InternalLink> guide
        to check the result.
      </TextBody>

      <Subheader href="#misc">A few things to care about</Subheader>

      <TextBody>
        Circular imports: If two of your services are importing each other, one
        of them will be ignored by CommonJs. Typescript won't complain at
        compile time, but if you get this:
        <Typography color="error">
          Uncaught TypeError: SomeService is not a constructor
        </Typography>
        you should start reviewing how your injectables depends on each other.{" "}
        <br />
        There is also a limitation by design: A service can depend only a
        service with a higher or equal lifetime then it's lifetime. That means a
        <i>singleton</i> <strong>can not</strong> depend on a transient or
        scoped service - you should get an exception at runtime if you try it.
      </TextBody>
      <TextBody>
        The package is available on{" "}
        <ExternalLink
          href="https://github.com/furystack/furystack/tree/master/packages/inject"
          target="_blank"
        >
          GitHub
        </ExternalLink>{" "}
        and can be downloaded from{" "}
        <ExternalLink
          href="https://www.npmjs.com/package/@furystack/inject"
          target="_blank"
        >
          NPM
        </ExternalLink>
        . Use it, love it. Don't hesitate to leave a feedback, a suggestion or
        just say Hi.
      </TextBody>
      <div
        className="fb-comments"
        {...{
          "data-href": "https://furystack.github.io/guide/inject.html",
          "data-width": "100%",
          "data-numposts": "15",
          "data-colorscheme": "dark"
        }}
      />
    </div>
  );
};
