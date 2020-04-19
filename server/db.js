const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'cowlist';

// Connect to DB?
const connection = mysql.createConnection({
  user: 'root',
  password: ''
});

// Promisify (what) methods?
const db = Promise.promisifyAll(connection, {multiArgs: true}); // (1)?

// Connect to DB? // (2)?
db.connectAsync()
  .then(() => {
    console.log(`Connected to ${database} as ID ${db.threadId}`)
  })
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;

module.exports = (db) => {

}

