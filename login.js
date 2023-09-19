const conn = require('./connection');
const password = 12345
const data = {
    email: 'faisal@gmail.com',
    password: password
}
const SelectQuery = 'SELECT * FROM nodetb where email=? and password=?'
conn.query(SelectQuery, [data.email, data.password], function (err, results) {
    if (err) {
        console.error('An Error occurred'.err);
    } else {
        // if (results.affectedRows > 0) {
        //     console.log('Data found '+results.affectedRows);
        // } else {
        //     console.log('No Data Found'+results.affectedRows);
        // }
        console.log(results);
    }
})