const mysql = require("mysql2")
const dbConfig = require("../config/db.config.js")

// Create a connection to the database
const connect = mysql.createConnection({
  port: dbConfig.PORT,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
})

module.exports = connect 