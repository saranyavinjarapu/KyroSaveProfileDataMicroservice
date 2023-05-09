const userProfileActions = require("./UserProfileActions");
const express = require("express");
const serverless = require("serverless-http");
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

router.get("/", (request, response) => {
  response.json({
    message: "User Profile Details Microservice using NodeJS and Express ",
  });
});

router.post("/userProfile", userProfileActions.saveUserProfile);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
