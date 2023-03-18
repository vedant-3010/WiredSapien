const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const port = 4000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb://vedant:BKqA6auni1hM1fRV@ac-b6xpqch-shard-00-00.nnwdei6.mongodb.net:27017,ac-b6xpqch-shard-00-01.nnwdei6.mongodb.net:27017,ac-b6xpqch-shard-00-02.nnwdei6.mongodb.net:27017/?ssl=true&replicaSet=atlas-vq4uy8-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const userDoc = await User.create({ username, password });
//   res.json(userDoc);
// });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passok = bcrypt.compare(password, userDoc.password);
  if (passok) {
    
    // res.json();
  } else {
    res.status(400).json("Invalid password");
  }
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
