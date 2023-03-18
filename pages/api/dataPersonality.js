import clientPromise from "@/utils/connectMongo";

export default async function handlerDataPersonality(req, res) {
  const client = await clientPromise;
  const db = client.db("DataPortfolio");
  if (req.method == "GET") {
    const dataPersonality = await db
      .collection("dataPersonality")
      .find({})
      .toArray();

    res.json({ status: 200, data: dataPersonality });
  } else console.log("proplem");
}
