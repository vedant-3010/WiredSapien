const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");

const port = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect( "mongodb://vedant:iaK7qavvID8cbhyl@ac-dgelwon-shard-00-00.owb0mze.mongodb.net:27017,ac-dgelwon-shard-00-01.owb0mze.mongodb.net:27017,ac-dgelwon-shard-00-02.owb0mze.mongodb.net:27017/?ssl=true&replicaSet=atlas-4gp2jm-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const userDoc = await User.create({ username, password });
//   res.json(userDoc);
// });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
