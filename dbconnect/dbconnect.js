const mysql = require('mysql2');


  const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  // port:3306,
  password: 'Admin@12345',
  database: 'payroll_jk'
});
module.exports = { connection };