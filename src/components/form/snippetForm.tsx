// import Editor from "./editor"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"
import Editor from "./editor"
import { useEffect, useState } from "react"

export default function SnippetForm(){

  const [code, setCode] = useState("");

    const formSchema = z.object({
  title: z.string().min(2).max(50),
})

// 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
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
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />

              <Editor value={code} onChange={setCode} />


              
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    <Link to='/SnippetPage'>
        <Button>Cancel</Button>
        </Link>
        
        
        
        </>
    )
}