const sql = require("mssql/msnodesqlv8");
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const { connect } = require("./config/db.js")

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Call the function to connect and query
connect().then ((connection) => {
  console.log("Database connected");
})
.catch((error) => {
  console.log("Connected Failed."); 
  console.log(error);
});
