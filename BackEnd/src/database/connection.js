// database/connection.js

const mysql = require('mysql2/promise');
const config = require('./config');

const dbConfig = {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    namedPlaceholders: true,
    charset: 'utf8mb4',
};
const pool = mysql.createPool(dbConfig);

pool.on('acquire', (connection) => {
    console.log('Connection %d acquired', connection.threadId);
});

pool.on('release', (connection) => {
    console.log('Connection %d released', connection.threadId);
});

pool.on('enqueue', () => {
    console.log('Waiting for available connection slot');
});

pool.on('error', (error) => {
    console.error('Pool error', error);
});

const executeQuery = async (query, params) => {
    let connection;
    try {
        connection = await pool.getConnection();
        // console.log('Connected to the database');
        // console.log('Database config:', dbConfig);
        // console.log('Query:', query);
        // console.log('Params:', params);
        const [results] = await connection.execute(query, params);
        return results;
    } catch (error) {
        console.error('Error during database connection or query:', error);
        throw error;
    } finally {
        try {
            if (connection) {
                // console.log('Releasing connection');
                connection.release();
            }
        } catch (error) {
            console.error('Error releasing connection:', error);
        }
    }
};


module.exports = { executeQuery };
