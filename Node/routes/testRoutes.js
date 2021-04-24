const {isAuth} = require("../service/isAuth");
const getConnection = require('../loaders/connection')
const { userId } = require("../service/isAuth");
const { getUser } = require("../service/testQueries");

module.exports = (app) => {

    /*
    * This is a basic express route.
    * The first variable is the path to access this particular route.
    * The second variable is a function that checks the person accessing this
    * endpoint has a valid OAuth token.
    * The third variable is a callback function that gives you the request made
    * and the response json.
    * The request is usually the data coming in. Any data sent will likely be
    * in req.body
    */
    app.get('/authorized', isAuth, (req, res) => {
        console.log("Ping from authorized user");
        return res.send(
            {
                msg: "User is authorized",
                status: 200,
            });
    });

    /*
     * This is an example of actually retrieving some data and calling the function.
     * We use our get userId function here to pass an id to the request but
     * you could also generate a uuid or use some other method.
     * Then we call the function from the middleware passing in the pool we're
     * connected to and the id as well as a callback function. The call back
     * function is what we will use to process the data we get back from the query.
     * In this case we send it back to the client.
     * We also log the type of request and the id so we know whats going on.
     */
    app.get('/user', isAuth, async (req, res) => {

        const pool = getConnection();

        let id = userId(req);
        console.log('GET |',id);

        getUser(pool, id, function (response) {
            return res.send(response);
        })
    });
};