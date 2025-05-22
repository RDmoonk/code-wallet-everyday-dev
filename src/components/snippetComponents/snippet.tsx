import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { Link } from "react-router"


export default function Snippet(){
    return <div className="border-1 border-black rounded-2xl p-2 m-2 drop-shadow-2xl">
    <h3>Title</h3>
    <p>code or some</p>
    <Badge variant="outline">Snippet's tag</Badge>
    <Link to='/SnippetForm'>
     <Button>Edit</Button>
     </Link>
      <Button>Delete</Button>
    </div>
}