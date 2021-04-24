const config = require('./config/config')
const express = require('express')
const init = require('./loaders/init')

async function startServer(){
    const app = express();

    // initialise any settings we might need including routes.
    await init(app, config);

    app.listen(config.port,() => {
        console.log(`
################################################
🛡️  Server listening on port: ${config.port} 🛡️
################################################
        `)
    }).on('error', err => {
        console.error(err);
        process.exit(1)
    });
}

startServer();