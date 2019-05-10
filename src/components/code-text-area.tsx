import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/styles/hljs/vs2015";

export const CodeTextArea: React.FunctionComponent<{
  value: string;
}> = props => {
  return (
    <SyntaxHighlighter language="typescript" style={dark}>
      {props.value}
    </SyntaxHighlighter>
  );
};
