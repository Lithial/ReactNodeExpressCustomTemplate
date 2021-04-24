const setupExpress = require('./express');

module.exports = async function initSettings(app,config) {

    /*
    * We call this function on initialisation. At the moment we only use it to init the settings
    * so that express doesn't break.
    */
    console.log("Loading express settings");
    await setupExpress(app,config);
    console.log("Loaded express settings");

}