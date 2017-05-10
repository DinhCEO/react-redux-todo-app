const JwtService = require('./../../auth/jwt/JwtService');
const jwtService = new JwtService();
const config     = require('./../../config');


const LoginRequire = function (req, res, next) {
    let token = (req.query.token || req.body.token || req.get('Authorization') || '').replace("Bearer ", "");
   try {
      let payload =  jwtService.decode(token);
       console.log(payload);
       let timeNow = new Date().getTime();
       console.log(timeNow);
       console.log(config.auth.expiredTime);
       if(timeNow - payload['timestamp'] > config.auth.expiredTime){
          return res.status(401).json({
               code    : 'AUTH_ERROR',
               message : 'Token expired time'
           });
       }
       return next();
   }catch (ex){
      return res.status(401).json({
           code    : 'AUTH_ERROR',
           message : 'Token not found'
       });
   }
};

module.exports = LoginRequire;
