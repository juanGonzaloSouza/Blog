const mysql = require('mysql')
const config = require('../config')

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conection;

function connectToDatabase() {
    conection = mysql.createConnection(dbconfig);

    conection.connect((err) => {
        if (err) {
            console.log('[db err', err);
            setTimeout(connectToDatabase, 200);
        } else {
            console.log('db suc');
        }
    })

    conection.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connectToDatabase()
        } else {
            throw err
        }
    })
}

connectToDatabase()

function select(table) {
    return new Promise((resolve, reject) => {
        conection.query(`SELECT * FROM ${table}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}
function insert(table, data) {
    return new Promise((resolve, reject) => {
        conection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

function updateData(table, data) {
    return new Promise((resolve, reject) => {
        conection.query(`UPDATE ${table} SET ? WHERE ID = ?`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}


function update(table, data) {
    if (data && data.id == 0) {
        return insert(table, data)
    } else {
        return updateData(table, data)
    }

}

function remove(table, data) {
    return new Promise((resolve, reject) => {
        conection.query(`DELETE FROM ${table} WHERE  id = ?`, data.id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

module.exports = {
    select,
    update,
    remove,
}