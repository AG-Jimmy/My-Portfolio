import { useState, useEffect } from "react";
import clientPromise from "@/utils/connectMongo";
export default function Guestbook({ comments }) {
  const [postsState, setPostsState] = useState([]);
  const [name, setName] = useState("");
  const [textcomment, setTextComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPostsState(comments);
  }, [comments]);

  let submitForm = async (e) => {
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
  };

  return (
    <div className="container">
      <div>
        {postsState.map((comment, index) => {
          return (
            <div key={index}>
              <img
                alt="imgcomment"
                style={{ width: "50px", height: "50px" }}
                src={comment.img_url}
              />
              <h2>{comment.name}</h2>
              <p>{comment.textcomment}</p>
            </div>
          );
        })}
      </div>

      <form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          name="content"
          rows="10"
          placeholder="Content"
          value={textcomment}
          onChange={(e) => setTextComment(e.target.value)}
        />

        <button type="submit" disabled={loading ? true : false}>
          {loading ? "Adding" : "Add"}
        </button>
      </form>
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
