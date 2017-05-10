require('dotenv').config({path : './../.env'});
const jwt = require('jwt-simple');

const secret = process.env.APP_SECRET_KEY;

class JwtService {
    constructor() {

    }

    encode(payload) {
        payload['timestamp'] = new Date().getTime();
        console.log('before encode payload =', payload);
        return jwt.encode(payload, secret);
    }

    decode(token) {
        return jwt.decode(token, secret);
    }
}
module.exports = JwtService;