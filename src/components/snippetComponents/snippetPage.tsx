import { Button } from "@/components/ui/button"
import { Link } from "react-router";
import Snippet from "./snippet";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"


interface Snippet {
  title: string;
  code: string;
  tag: string;
}

export default function SnippetPage(){

     const [snippets, setSnippets] = useState<Snippet[]>([]);

      useEffect(() => {
    const saved = localStorage.getItem("snippets");
    if (saved) {
      setSnippets(JSON.parse(saved));
    }
  }, []);



    return(
        <>
        <h2>Snippets</h2>

        <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Snippets</h2>

      <div className="grid gap-4">
        {snippets.map((snippet, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow bg-white"
          >
            <h3 className="font-semibold">{snippet.title}</h3>
            <pre className="bg-gray-100 p-2 rounded my-2 text-sm overflow-auto">
              <code>{snippet.code}</code>
            </pre>
            <Badge variant="outline">{snippet.tag}</Badge>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/SnippetForm">
          <Button>Add Snippet</Button>
        </Link>
      </div>
    </div>

        {/* <Link to='/SnippetForm'>
        <Button>Add</Button>
        </Link> */}
        </>
    );
}