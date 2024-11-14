const express = require("express");
const mysql = require("mysql2");

const User = require("./models/user");
const MBTI = require("./models/mbti");
const Restaurant = require("./models/restaurant");

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
