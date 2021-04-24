const dotenv = require('dotenv');
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process

    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

/*
* This config file pulls data out of the .env file in order to keep
* this information secret. This will include things like port values, api
* endpoints for obfuscation and database passwords and logins.
*/
module.exports = Config = {
    /*
    * Node_endpoint is the base url the application will run on.
    * Port is the port for application to run on
    */
    node_endpoint:process.env.NODE_BASE_ENDPOINT,
    port: parseInt(process.env.NODE_PORT, 10),

    /*
    Postgres INFO
    */
    pgUser: process.env.POSTGRESUSER,
    pgHost: process.env.POSTGRESHOST,
    pgDb: process.env.POSTGRESDATABASE,
    pgPass: process.env.POSTGRESPASSWORD,
    pgPort: process.env.POSTGRESPORT,

    /*
    Auth0 stuffs
    */
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,

    /*JWT props*/
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,


}
