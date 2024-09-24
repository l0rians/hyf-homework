import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import fs from "fs";

// Support parsing JSON requests
const documents = JSON.parse(fs.readFileSync("documents.json", "utf8"));

app.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.json(documents);
  }

  const filteredDocuments = documents.filter((doc) =>
    Object.values(doc).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(q.toLowerCase())
    )
  );

  res.json(filteredDocuments);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
