import clientPromise from "@/utils/connectMongo";

export default async function handlerComments(req, res) {
  const client = await clientPromise;
  const db = client.db("DataPortfolio");

  if (req.method == "GET") {
    const comments = await db.collection("comments").find({}).toArray();
    res.json({ status: 200, data: comments });
  } else if (req.method == "POST") {
    let bodyObject = JSON.parse(req.body);
    let newcomment = await db.collection("comments").insertOne(bodyObject);
    res.json(newcomment);
  }
}













/*
// switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let newcomment = await db.collection("data-Personality").insertOne(bodyObject);
//       res.json(newcomment);
//       break;
//     case "GET":
//       const comments = await db.collection("data-Personality").find({}).toArray();
//       res.json({ status: 200, data: comments });
//       break;
//   }*/
