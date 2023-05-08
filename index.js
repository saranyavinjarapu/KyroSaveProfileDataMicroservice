const userProfileActions = require("./src/UserProfileActions");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({
    message: "User Profile Details Microservice using NodeJS and Express ",
  });
});

app.post("/userProfile", userProfileActions.saveUserProfile);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
