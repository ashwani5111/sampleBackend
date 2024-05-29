// import { connection } from "../dbconnect/dbconnect";
const {connection} = require("../dbconnect/dbconnect.js")
// console.log(connection);
module.exports ={
    async checkFunction(req,res){
        const updated_data = req.body;
        
        connection.query('SELECT * FROM company_details.company_details_table; ', (err, results, fields) => {
            if (err) {
              res.status(500).send('Error fetching data');
              return;
            }
            res.json(results);
            console.log(results);
          });
        
    }
}