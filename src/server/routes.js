const express = require('express');
const routes = express.Router();
const CoolWear = require('./controller');

routes.post('/api/SignUpUser', CoolWear.singUpUser);
routes.post('/api/loginUser',CoolWear.loginUser);
routes.post('/api/forgetPassword',CoolWear.forgetPassword);

module.exports = routes;
