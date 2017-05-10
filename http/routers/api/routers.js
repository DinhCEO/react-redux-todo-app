const express           = require('express');
const router            = express.Router();
const JwtService        = require('../../auth/jwt/JwtService');
const jwtService        = new JwtService();
const loginCredential   = require('../../auth/middleware/user-credential.require');
const LoginRequire      = require('./../../auth/middleware/token.verify');
const rand              = require("random-key");

const dataFake = [
    {
        id : 'asaHAGTlW3o3pWTy',
        completed : false,
        text : "Learn about actions 1"
    },
    {
        id : 'asaHAGTlW3o3pWTM',
        completed : false,
        text : "Learn about actions 2"
    },
    {
        id : 'asaHAGTlW3o3pWTt',
        completed : false,
        text : "Learn about actions 3"
    }
];

router.get('/get-data', LoginRequire, function (req, res) {
    res.status(200).json(dataFake);
});
router.put('/:text', LoginRequire, function (req, res) {
    let text = req.params.text;
    let newTodo = {
        id : rand.generate(),
        completed : false,
        text : text
    };
    dataFake.push(newTodo);
    res.json(newTodo);
});
router.post('/login', loginCredential, function (req, res) {
    try {
        const token = jwtService.encode(req.body);
        res.json(token);
    } catch (ex) {
        res.json({
            code : 'AUTH_ERROR',
            message : 'token encode found!'
        });
    }
});

module.exports = router;