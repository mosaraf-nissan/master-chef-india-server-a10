const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("My Server is Running......");
});
app.listen(port, () => {
  console.log(`The server Is Running${port}`);
});