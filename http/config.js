module.exports = {
    app : {
        port        : process.env['PORT']              || 3000,
        secretKey   : process.env['APP_SECRET_KEY ']   || 'random key'
    },
    auth : {
        expiredTime : process.env['EXPIRED_TIME']      || 12 * 60 * 60 * 1000
    },
    Api_Url : process.env['API_URL'] || 'http://localhost:3003/api'
};