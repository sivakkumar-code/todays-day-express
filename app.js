const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let date = new Date();
  const result = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  res.send(result);
});

app.listen(3000);

module.exports = app;
