import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export const CodeTextArea: React.FunctionComponent<{
  value: string;
}> = props => {
  return (
    <SyntaxHighlighter language="typescript">
      {props.value}
    </SyntaxHighlighter>
  );
};
