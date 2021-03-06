const expressJwt = require('express-jwt');
const config = require('configuration.json');
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if (!user) {
        return done(null, true);                // if user no longer exists return null
    }

    done();
};