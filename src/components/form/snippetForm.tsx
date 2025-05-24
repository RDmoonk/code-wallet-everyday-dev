import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, Routes, Route } from "react-router";
import Editor from "./editor";
import { useEffect, useState } from "react";
import SnippetPage from "../snippetComponents/snippetPage";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";

export default function SnippetForm(){

  const [code, setCode] = useState("");

  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const navigate = useNavigate();

    const formSchema = z.object({
  title: z.string().min(2).max(50),
  tags: z.array(z.string().min(1)).optional(), // <-- supports multiple tags
})

// 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "", tags: []
    },
  })

   // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
     localStorage.setItem('formValues', JSON.stringify(values));
  console.log('Saved form data:', values);
    console.log(values);

    // this part is served to save everything once the submit button is clicked
    localStorage.setItem("formValues", JSON.stringify(values));
  localStorage.setItem("codeSnippet", code);

  const snippet = {
    title: values.title,
    code,
    tags,
  };

   const saved = localStorage.getItem("snippets");
  const snippets = saved ? JSON.parse(saved) : [];

  const editIndex = localStorage.getItem("editSnippetIndex");

  if(editIndex !== null){
    snippets[parseInt(editIndex)] = snippet;
    localStorage.removeItem("editSnippetIndex");
  } else {
    snippets.push(snippet);
  }


  localStorage.setItem("snippets", JSON.stringify(snippets));

  // naviagte to the SnippetPage once the submit is done
   navigate("/SnippetPage");
  }


// Load saved values from localStorage
useEffect(() => {
  const savedValues = localStorage.getItem("formValues");
  const savedCode = localStorage.getItem("codeSnippet");

  if (savedValues) form.reset(JSON.parse(savedValues));
  if (savedCode) setCode(savedCode);
}, []);




    return(
        <>
        <div className="sans-font">
        <div className="p-2 m-2">
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-2 border-jet p-2 rounded-2xl shadow-lg">
        {/* Title's part of the form */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-2">
              <FormLabel className="mt-5">Title</FormLabel>
              <FormControl>
                 <div className="flex gap-2 m-2">
                <Input placeholder="Enter a title" {...field} required className="min-w-full" />
                </div>
              </FormControl>
              <FormMessage />
              </div>

               <FormItem>
                
                
    <div className="space-y-2 m-3">
  <FormLabel>Tags</FormLabel>
  <div className="flex flex-col gap-2 m-3 ">
    <Input
      value={tagInput}
      placeholder="Add a tag"
      onChange={(e) => setTagInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (tagInput && !tags.includes(tagInput)) {
            setTags([...tags, tagInput]);
            setTagInput("");
          }
        }
      }}
      className="min-w-full"
    />
    <Button
      type="button"
      onClick={() => {
        if (tagInput && !tags.includes(tagInput)) {
          setTags([...tags, tagInput]);
          setTagInput("");
        }
      }}
      className="bg-mantis hover:bg-light-mantis text-jet shadow-sm w-1/15">
      Add
    </Button>
  </div>
  <div className="flex flex-wrap gap-2 mt-2">
    {tags.map((tag, index) => (
      <Badge key={index} variant="outline">
        {tag}
        <button
          className="ml-1 text-red-500"
          type="button"
          onClick={() => setTags(tags.filter((_, i) => i !== index))}
        >
          ×
        </button>
      </Badge>
    ))}
  </div>
</div>
      <FormMessage />
    </FormItem>

              {/* The editor is a component here */}
              <Editor value={code} onChange={setCode} />
            </FormItem>
            
          )}
        />

        
       
        <Button className="mr-2 bg-mantis hover:bg-light-mantis text-jet shadow-sm">Submit</Button>
     

           <Link to='/SnippetPage'>
        <Button className="bg-veronica hover:bg-light-veronica shadow-sm">Back</Button>
        </Link>
        
      </form>
    </Form>

 

         <Routes>
        <Route path='/SnippetPage/*' element={<SnippetPage/>}/>
        </Routes>
       </div>
       </div>
        </>
    )
}