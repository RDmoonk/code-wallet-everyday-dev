// components/ShikiCodeBlock
// This component is used so the app can render the code of the snippets with highlights
import { useEffect, useState } from "react";

interface Props {
  code: string;
  lang?: string;
}

export default function ShikiCodeBlock({ code, lang = "typescript" }: Props) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        const { createHighlighter } = await import('shiki');
        const highlighter = await createHighlighter({
          themes: ['nord'],
          langs: [lang, 'javascript', 'typescript'] // Include the current lang
        });
        
        const highlighted = highlighter.codeToHtml(code, { 
          lang: lang,
          theme: 'nord' 
        });
        setHtml(highlighted);
      } catch (error) {
        console.error('Error highlighting code:', error);
        setHtml(`<pre><code>${code}</code></pre>`);
      }
    };
    
    load();
  }, [code, lang]);

  return (
    <div
      className="overflow-auto rounded-md text-sm mt-3"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}