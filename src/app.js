const express = require("express");

const app = express();
app.use('/test',(req, res) => {
  res.send("Hello from the server 3000 Test page");
});
app.use("/hello", (req, res) => {
  res.send("Hello Namaste Hello !!!");
});
app.use("/", (req, res) => {
  res.send("Hello from Home Page");
});
app.use("/game", (req, res) => {
  res.send("Hello from Game Page");
});


app.listen(3000, () => {
  console.log("Server is Succesfully running on PORT: 3000");
});
