const express = require("express");

const app = express();
app.get("/user", (req, res) => {
  res.send({ firstName: "Kuldeep", lastName: "Chouhan" });
});
app.post("/user", (req, res) => {
  res.send("Data is send successfully to DB");
});
app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});
app.use("/test", (req, res) => {
  res.send("Hello from the server 3000 Test page");
});

app.listen(3000, () => {
  console.log("Server is Succesfully running on PORT: 3000");
});
