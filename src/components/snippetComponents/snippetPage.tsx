import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router";
import Snippet from "./snippet";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
// for the syntaxic color of the code 





interface Snippet {
  title: string;
  code: string;
  tags: string[];
}

export default function SnippetPage(){

     const [snippets, setSnippets] = useState<Snippet[]>([]);

      useEffect(() => {
    const saved = localStorage.getItem("snippets");
    if (saved) {
      setSnippets(JSON.parse(saved));
    }
  }, []);

   const navigate = useNavigate();

  const handleDelete = (index: number) => {
  const updated = snippets.filter((_, i) => i !== index);
  setSnippets(updated);
  localStorage.setItem("snippets", JSON.stringify(updated));
};

const handleEdit = (index: number) => {
  const snippetToEdit = snippets[index];
  localStorage.setItem("editSnippetIndex", index.toString()); // mark which to edit
  localStorage.setItem("formValues", JSON.stringify({ title: snippetToEdit.title, tags: snippetToEdit.tags }));
  localStorage.setItem("codeSnippet", snippetToEdit.code);
  navigate("/SnippetForm");
};



    return(
        <>

        <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-jet">Snippets</h2>

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

             <div className="flex flex-wrap gap-2 mt-2">
    {Array.isArray(snippet.tags) &&
      snippet.tags.map((tag: string, i: number) => (
        <Badge key={i} variant="outline" className="bg-african-violet border-african-violet">{tag}</Badge>
      ))}
  </div>

  {/* edit and delete buttons */}
<div className="mt-4 flex gap-2">
    <Button
      variant="outline"
      onClick={() => handleEdit(index)}
      className="bg-mantis border-mantis hover:bg-light-mantis"
    >
      Edit
    </Button>
    <Button
      variant="destructive"
      onClick={() => handleDelete(index)}
      className="bg-veronica hover:bg-light-veronica"
    >
      Delete
    </Button>
  </div>
           
          </div>))}
      </div>

      <div className="mt-6">
        <Link to="/SnippetForm">
          <Button className="bg-mantis text-black hover:bg-light-mantis">Add Snippet</Button>
        </Link>
      </div>
    </div>
        </>
    );
}