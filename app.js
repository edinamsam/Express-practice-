const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.use((req, res) => {
  res.status(400).send("resource not found");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
