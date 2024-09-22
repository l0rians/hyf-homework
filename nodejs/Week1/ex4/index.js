import express from "express";
import { knexInstance } from "./database.js";
const app = express();
const port = 3000;

app.get("/first-user", async (req, res) => {
  const user = await knexInstance("users").first();
  res.json(user);
});

app.get("/user-count", async (req, res) => {
  const count = await knexInstance("users").count();
  res.json(count);
});

app.get("/2022-users", async (req, res) => {
  const users = await knexInstance("users")
    .whereBetween("created_at", ["2022-01-01 00:00:00", "2022-12-31 23:59:59"])
    .orderBy("created_at");
  res.json(users);
});

app.get("/gmail-users", async (req, res) => {
  const users = await knexInstance("users")
    .where("email", "like", "%gmail.com")
    .orderBy("id");
  res.json(users);
});

app.get("/unconfirmed-users", async (req, res) => {
  const users = await knexInstance("users")
    .whereNull("confirmed_at")
    .orderBy("id");
  res.json(users);
});

app.get("/all-users", async (req, res) => {
  const users = await knexInstance("users").orderBy("id");
  res.json(users);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello Class!" });
});

app.get("/info", async (req, res) => {
  const [rows] = await knexInstance.raw("SELECT VERSION()");

  res.json({
    nodeVersion: process.version,
    mysqlVersion: rows[0]["VERSION()"],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
