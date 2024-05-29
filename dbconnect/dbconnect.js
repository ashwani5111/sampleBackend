const mysql = require('mysql2');


  const connection = mysql.createConnection({
  host: 'ec2-3-111-171-146.ap-south-1.compute.amazonaws.com',
  user: 'ec2-root',
  // port:3306,
  password: 'Gourav@12345',
  database: 'anything'
});
module.exports = { connection };