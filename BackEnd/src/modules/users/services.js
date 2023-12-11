// modules/users/services.js

const queries = require('../../database/queries');

const userService = {};

userService.getAllUsers = () => queries.selectLastNRecords('users', 100);

userService.getUserById = (id) => queries.selectById('users', id);

userService.createUser = (name, password, email) => queries.insertRecord('users', { name, password, email });

userService.updateUser = (id, name, email, password) => queries.updateRecord('users', { name, email, password }, { id });

userService.deleteUser = (id) => queries.deleteRecord('users', { id });

module.exports = userService;
