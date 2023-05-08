const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "kyro",
  password: "Foodie@123",
  port: 5432,
});

const processErrorMessage = (err, message) => {
  let errorStackResponse = err.stack.split("\n")[0];
  let errorMessage = errorStackResponse ? errorStackResponse : message;
  return errorMessage;
};

const saveUserProfile = (request, response) => {
  const {
    firstName,
    lastName,
    displayName,
    email,
    workPhone,
    personalPhone,
    location,
  } = request.body.formValues;
};

const createUserProfile = (request, response) => {
  const {
    firstName,
    lastName,
    displayName,
    email,
    workPhone,
    personalPhone,
    location,
  } = request.body.formValues;

  try {
    pool
      .query(
        `INSERT INTO user_profile( first_name, last_name, display_name, email, work_phone, personal_phone, location)
          VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
        [
          firstName,
          lastName,
          displayName,
          email,
          workPhone,
          personalPhone,
          location,
        ]
      )
      .then((result) => {
        response
          .status(201)
          .send(`User added with Display Name: ${result.rows[0].display_name}`);
      })
      .catch((err) => {
        response
          .status(501)
          .json(processErrorMessage(err, "Data Query could not be processed"));
      });
  } catch {
    response.status(501).send("Error Inserting Data");
  }
};

module.exports = {
  createUserProfile,
  saveUserProfile,
};
