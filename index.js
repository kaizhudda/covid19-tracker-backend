// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
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

app.get("/daily-cases", (req, res) => {
  res.status(200).json({
    dailyCases: [
      {
        date: "2016-03-26",
        cases: "78"
      },
      {
        date: "2016-03-26",
        cases: "78"
      }
    ]
  });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
