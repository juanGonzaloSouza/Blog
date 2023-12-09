// Config
const express = require('express');
const config = require('./config');
const morgan = require('morgan')

// Modules
const users = require('./modules/users/route')

const error = require('./network/error')

const app = express();

// MiddleWare
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Config
app.set('port', config.app.port);

// Routes

app.use('/api/users', users)

app.use(error)
module.exports = app;