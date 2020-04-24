require("dotenv").config();
const mysql = require("mysql");
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employees_db"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;