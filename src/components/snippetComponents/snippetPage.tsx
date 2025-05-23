import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router";
import Snippet from "./snippet";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
// for the syntaxic color of the code 
import ShikiCodeBlock from "./shikiCodeBlock";
// modal of alert
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";





interface Snippet {
  title: string;
  code: string;
  tags: string[];
}

export default function SnippetPage(){

     const [snippets, setSnippets] = useState<Snippet[]>([]);

    //  this is values that will be used for the copy alert
     const [showAlert, setShowAlert] = useState(false);


     

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

// this is for the copy to clipboard
// const handleCopy = (code: string) => {
//   // Option 1: Electron clipboard (if nodeIntegration or preload is set up)
//   try {
//     const { clipboard } = window.require?.('electron') || {};
//     if (clipboard) {
//       clipboard.writeText(code);
//     } else if (navigator.clipboard) {
//       // Fallback: Web Clipboard API
//       navigator.clipboard.writeText(code);
//     }
//     alert("Copied to clipboard!");
//   } catch (err) {
//     console.error("Copy failed", err);
//     alert("Failed to copy");
//   }
// };

const handleCopy = (code: string) => {
  try {
    const { clipboard } = window.require?.('electron') || {};
    if (clipboard) {
      clipboard.writeText(code);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }

    // ✅ Show the alert correctly
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  } catch (err) {
    console.error("Copy failed", err);
    // Optionally show a different alert
    setShowAlert(true);
  }
};
    return(
        <>
        <div className="p-4">
      <h2 className="text-xl font-bold mb-5 text-jet">Snippets</h2>

       <div className="mb-6">
        <Link to="/SnippetForm">
          <Button className="bg-mantis text-black hover:bg-light-mantis">Add Snippet</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {snippets.map((snippet, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow bg-white"
          >
            <h3 className="font-semibold">{snippet.title}</h3>

            {/* <pre className="bg-gray-100 p-2 rounded my-2 text-sm overflow-auto">
              <code>{snippet.code}</code>
            </pre> */}
            <ShikiCodeBlock code={snippet.code} />

             <div className="flex flex-wrap gap-2 mt-2">
    {Array.isArray(snippet.tags) &&
      snippet.tags.map((tag: string, i: number) => (
        <Badge key={i} variant="outline" className="bg-african-violet border-african-violet">{tag}</Badge>
      ))}
  </div>

  {/* edit, delete and copy buttons */}
<div className="mt-4 flex gap-2">
  {/* the edit button that will edit by getting the index of the snippet */}
    <Button
      variant="outline"
      onClick={() => handleEdit(index)}
      className="bg-mantis border-mantis hover:bg-light-mantis">Edit</Button>

      {/* delete with an alert */}
          <AlertDialog>
  <AlertDialogTrigger>
    <Button className="bg-veronica hover:bg-light-veronica text-jet">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className="text-jet">Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your snippet.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className="text-jet">Cancel</AlertDialogCancel>
      <AlertDialogAction  onClick={() => handleDelete(index)} className="bg-veronica hover:bg-light-veronica">
        yes, let's delete
        </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>


       {/* Copy button that will execute the action when you click it */}
              <Button variant="outline"onClick={() => handleCopy(snippet.code)} className="bg-light-african-violet border-african-violet text-black hover:bg-african-violet">Copy</Button>
  </div>

      {/* This alert will let you knwon if you the copy did itself */}
        {showAlert && (
          <Alert className="mb-4 mt-4 border-mantis bg-green-50 text-green-800">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Copied!</AlertTitle>
            <AlertDescription>The code was copied to your clipboard.</AlertDescription>
            </Alert>)}
 
           
          </div>))}
      </div>

     
    </div>
        </>
    );
}