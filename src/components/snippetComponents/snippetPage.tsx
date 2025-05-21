import { Button } from "@/components/ui/button"
import { Link } from "react-router";

export default function SnippetPage(){
    return(
        <>
        <h2>Snippets</h2>

        <Link to='/SnippetForm'>
        <Button>Add</Button>
        </Link>
        </>
    );
}