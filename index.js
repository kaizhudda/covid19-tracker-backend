// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const cases = require("./data/cases");
const caseDetails = require("./data/caseDetails");
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || 8000;

/**
 * App Configuration
 */

/**
 * Routes Definition
 */

app.get("/api/cases", (req, res) => {
  res.status(200).json(cases);
});

app.get("/api/case-details", (req, res) => {
  res.status(200).json(caseDetails);
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
