const mysql  = require('mysql')
const dotenv = require("dotenv")

dotenv.config()

const connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    port     : process.env.MYSQL_PORT,
    user     : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_MYSQL_SCHEMA_NAME
  });

module.exports = connection