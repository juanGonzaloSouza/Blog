const db = require('../../database/mysql');

const TABLE = 'users'

function select() {
    return db.select(TABLE)
}

function remove(BODY) {
    return db.remove(TABLE, BODY)
}

function update(BODY) {
    return db.update(TABLE, BODY)
}

module.exports = {
    select,
    remove,
    update
}