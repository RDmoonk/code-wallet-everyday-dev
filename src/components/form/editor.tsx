// components/form/editor.tsx
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <CodeMirror
      value={value}
      height="200px"
      extensions={[html(), css(), javascript()]}
      theme={oneDark}
      onChange={onChange}
    />
  );
}
