const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.all("/", (req, res) => {
  res.send("Hello World!");
});

////PORT LISTEN/////
app.listen(port, () => {
  console.log(`Product app listening on port ${port}`);
});
