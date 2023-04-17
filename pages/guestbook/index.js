
import { useState, useEffect } from "react";
import { Input,Text,Card, Button,Textarea ,Grid} from "@nextui-org/react";
import clientPromise from "@/utils/connectMongo";


export default function Guestbook({ comments }) {

  const [postsState, setPostsState] = useState([]);
  const [name, setName] = useState("");
  const [textcomment, setTextComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPostsState(comments);
  }, [postsState]);

  let submitForm = async (e) => {
    if (name,textcomment==/[a-z]/&&name,textcomment.length >=3) {
      setLoading(true);
    // e.preventDefault();
    let res = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ name: name, textcomment: textcomment }),
    });
    res = await res.json();
    setPostsState([...postsState, res]);
    setName("");
    setTextComment("");
    setLoading(false);
    }else{ 
      alert('You must enter your name and comment')
    e.preventDefault();}
    
  };

  return (
<div className="container">

         <div style={{width:"50%"}} >
            {postsState.map((comment, index) => {
                return ( 
                  
                     <div key={index}>
           
                        <h2>{comment.name }</h2>
                        <p>{comment.textcomment}</p>
                     </div>);})
             }


         </div>

       <Card  css={{  $$cardColor:"$transform" }}>
             <form  onSubmit={submitForm} >

                   <Card.Body>
                       <Input 
                          labelLeft="username" 
                          placeholder="Enter your name please ."
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                   </Card.Body>

                   <Card.Body>
                       <Textarea
                           placeholder="Tell me what you think about my website . "
                           value={textcomment}
                           onChange={(e) => setTextComment(e.target.value)} />
                   </Card.Body>

                   <Card.Body>
                       <Button color="white" auto ghost
                           size="lg"
                           type="submit"
                           disabled={loading ? true : false}
                       
                           css={ {color:"white",px:"20" }}>
                           {loading ? "Adding" : "Add"}
                       </Button>
                   </Card.Body>
            </form>
       
      </Card>
    
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/comments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let posts = await res.json();

  const client = await clientPromise;
  const db = client.db("DataPortfolio");
  let comments = await db.collection("comments").find({}).toArray();
  comments = JSON.parse(JSON.stringify(comments));

  return {
    props: { comments, posts },
  };
}
