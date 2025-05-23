import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { Link } from "react-router"
import SnippetPage from "./snippetPage"
import { Route } from "react-router"


interface Snippet {
  title: string;
  code: string;
  tag: string;
}



export default function Snippet(){

  const saved = localStorage.getItem("snippetCard");
  if (!saved) return <p>No snippet found</p>;

   const snippet: Snippet = JSON.parse(saved);

  
    return <>
    <div className="border-1 border-black rounded-2xl p-2 m-2 drop-shadow-2xl">
    <h3>{snippet.title}</h3>
    <p>{snippet.code}</p>
    <Badge variant="outline">{snippet.tag}</Badge>
    <Link to='/SnippetForm'>
     <Button>Edit</Button>
     </Link>
      <Button>Delete</Button>
    </div>

    <Route path="/SnippetPage" element={<SnippetPage />} />
    </>

    
}