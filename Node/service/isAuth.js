const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config/config')

/*
* This function is used to decrypt and verify the Json Web Token.
* There are other values that can be used here but this is a good start for now.
*/
const isAuth = jwt({
    secret:jwksRsa.expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksRequestsPerMinute: 5,
        jwksUri:`https://${config.domain}/.well-known/jwks.json`
    }),
    audience: config.audience,
    issuer:`https://${config.domain}/`,
    algorithms:[`${config.jwtAlgorithm}`],
});

/*
* This is how I am getting user Id's in this application.
* I am taking the request object from auth0 and dissecting the sub value to create a unique id
* https://auth0.com/docs/tokens This website has more information on the values and their uses.
*/
const userId = (req) =>{
    let fullSub = req.user.sub.split('|');
    return fullSub[fullSub.length - 1];
}

module.exports = {
    isAuth,
    userId:userId,
};