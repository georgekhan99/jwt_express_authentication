const db = require('mysql2')

const Database = db.createPool({
    host:'localhost',
    user: 'root',
    database:'user',
    password:'',
    port: 3306
})

module.exports = Database.promise();
