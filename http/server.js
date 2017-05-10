require('dotenv').config({path : './../.env'});
const express           = require('express');
const app               = express();
const cors              = require('cors');
const bodyParser        = require('body-parser');
const config            = require('./config');
const LoginRequire      = require('./auth/middleware/token.verify');
const routerAPI         = require('./routers/api/routers');
const port              = config.app.port;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routerAPI);

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
});