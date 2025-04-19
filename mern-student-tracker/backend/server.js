const connectDB = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/students", async (req, res) => {
  const db = await connectDB();
  const students = await db.collection("students").find().toArray();
  res.json(students);
});

app.post("/students", async (req, res) => {
  const db = await connectDB();
  const { name, age, progress } = req.body;
  await db.collection("students").insertOne({ name, age, progress });
  res.json({ message: "Student Added" });
});

app.post("students", async (req, res) => {
  const db = await connectDB();
  const { name } = req.params;
  const { progress } = req.body;
  await db.collection("students").updateOne({ name }, { $set: { progress } });
  res.json({ messgae: "Progress Updated" });
});

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});