const sql = require("mssql");
const dotenv = require('dotenv');

dotenv.config();

const config = {
  server: 'ADMIN\\SQLEXPRESS',  // Make sure this is correct
  database: process.env.ACCOUNT_DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  driver: 'ODBC Driver 18 for SQL Server',
  options: {
    trustedConnection: true,  // If you're using Windows Authentication
    enableArithAbort: true,
  },
};


module.exports = {
  connect: () => sql.connect(config),
  sql,
};
