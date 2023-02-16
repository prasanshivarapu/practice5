const express = require("express");
const app = express();
let date = new Date();
app.get("/", (request, response) => {
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});
module.exports = app;
