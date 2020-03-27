const express = require("express");
const serverless = require("serverless-http");
const cases = require("../data/cases");
const caseDetails = require("../data/caseDetails");

const app = express();
const router = express.Router();

router.get("/cases", (req, res) => {
  res.json(cases);
});

router.get("/case-details", (req, res) => {
  res.json(caseDetails);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
