const dotenv = require("dotenv");

dotenv.config();

// Xuất các biến môi trường để dùng trong các file khác
const ENV_VARS = {
  SERVER_NAME: process.env.SERVER_NAME,
  ACCOUNT_DB: process.env.ACCOUNT_DB,
  RES_DB: process.env.RESTAURANTS_DB,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT
};

module.exports = ENV_VARS; // Cho Node.js (CommonJS)
