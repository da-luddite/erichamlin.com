let config = require('../config');
const mysql = require('mysql');

const connection = mysql.createConnection(config.db);
connection.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to the DB');
    throw err;
  }
});

module.exports = connection;
