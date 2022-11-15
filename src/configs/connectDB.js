// get the client
import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'userInfo'
});

// simple query
// connection.query(
//   'SELECT * FROM `Persons`',
//   function(err, results, fields) {
//     console.log('>>>>> Check MySQL >>>>>')
//     console.log(results); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

export default pool;