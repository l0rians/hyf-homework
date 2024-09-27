import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import fs from "fs";
app.use(express.json());

// Support parsing JSON requests
const documents = JSON.parse(fs.readFileSync("documents.json", "utf8"));

const filterDocuments = (documents, q, fields) => {
  if (q) {
    return documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(q.toLowerCase())
      )
    );
  }

  if (fields) {
    return documents.filter((doc) => {
      return Object.entries(fields).every(
        ([key, value]) =>
          doc[key] &&
          doc[key].toString().toLowerCase() === value.toString().toLowerCase()
      );
    });
  }

  return documents;
};

app.get("/search", (req, res) => {
  const { q } = req.query;
  const filteredDocuments = filterDocuments(documents, q, null);
  res.json(filteredDocuments);
});

app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;

  // if both q and fields are provided, return an error
  if (q && fields) {
    return res
      .status(400)
      .send("Cannot search by both query and fields simultaneously");
  }

  const filteredDocuments = filterDocuments(documents, q, fields);
  res.json(filteredDocuments);
});

app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const document = documents.find((doc) => doc.id == id);

  if (!document) {
    return res.status(404).send("Document not found");
  }

  res.json(document);
});

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
