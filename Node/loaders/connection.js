const { Pool } = require('pg');
const config = require('../config/config');

/*
* This module gives access to the node-postgres database pool
* for doing multiple database queries at a time.  I have included an example query
* under services/testQueries
*/
module.exports = () =>{
    const pool = new Pool({
        user: config.pgUser,
        host: config.pgHost,
        database: config.pgDb,
        password: config.pgPass,
        port: config.pgPort
    });

    pool.on('error', (err,client) => {
        console.error('Unexpected error on idle client', err)
        process.exit(-1)
    });

    return pool;
}

