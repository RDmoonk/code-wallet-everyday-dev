import { Button } from "@/components/ui/button"
import { Link } from "react-router";
import Snippet from "./snippet";

export default function SnippetPage(){
    return(
        <>
        <h2>Snippets</h2>

        <Snippet/>

        <Link to='/SnippetForm'>
        <Button>Add</Button>
        </Link>
        </>
    );
}