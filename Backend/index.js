const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
})

app.get("/test", (req, res) => {
  res.send("In test route")
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log("server is running at "+ PORT);
})