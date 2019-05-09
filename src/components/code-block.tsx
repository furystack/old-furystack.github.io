import MonacoEditor, { MonacoEditorProps } from "react-monaco-editor";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { deepMerge } from "@sensenet/client-utils";
import React from "react";

export const CodeBlock: React.FunctionComponent<MonacoEditorProps> = props => {
  const theme = useContext(ThemeContext);

  const mergedProps = deepMerge(
    {
      theme: theme.palette.type === "dark" ? "vs-dark" : "vs-light",
      height: 400,
      language: "typescript",
      options: {
        automaticLayout: true,
        minimap: {
          enabled: false
        },
        scrollBeyondLastLine: false
      }
    } as MonacoEditorProps,
    props
  );

  return <MonacoEditor {...mergedProps} />;
};
