const mysql = require('mysql2');


  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ec2-root',
  // port:3306,
  password: 'Gourav@12345',
  database: 'anything'
});
module.exports = { connection };