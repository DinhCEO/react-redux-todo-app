let jwt = require('jwt-simple');


let payload = {bar :'foo'};
let sceret = 'xxxxxxx-xxxxxxx-xxxxxx';


// let token = jwt.encode(payload,sceret);
// console.log(token);

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJ0aW1lc3RhbXAiOjE0OTQyOTcxMTIyNTR9.4qs7XxVzhexk9_Y4tvkWfYTB6kPi9wkIhTo1Yd3x2WI";


let decoded = jwt.decode(token,sceret);
console.log(decoded);