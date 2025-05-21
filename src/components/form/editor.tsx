import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html} from "@codemirror/lang-html"; 
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

export default function Editor(){
    const [code, setCode] = React.useState("console.log('Hello, CodeMirror !')");

    return(
        <CodeMirror
        value={code}
        height="200px"
        extensions={[html(), css(), javascript()]}
        theme={oneDark}
        onChange={(value) => {
            setCode(value)
        }}
        
        />
    )
}
