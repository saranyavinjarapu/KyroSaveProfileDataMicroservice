const express = require("express");
const { randomBytes } = require("crypto");
const app = express();
const port = 4000;

console.log("app is :", app);

app.get("/", (request, response) => {
  response.json({
    message: "User Profile Details Microservice using NodeJS and Express ",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
