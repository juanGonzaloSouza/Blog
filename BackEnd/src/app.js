// app.js


// Config
const express = require('express');
const config = require('./config');

const morgan = require('morgan')

// Modules
const users = require('./modules/users/routes')
const articles = require('./modules/articles/routes')

const error = require('./network/errorMiddleware')

const app = express();

// MiddleWare
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Config
app.set('port', config.app.port);

// Routes
app.use('/api/users', users)
app.use('/api/articles', articles)



app.use(error)
module.exports = app;