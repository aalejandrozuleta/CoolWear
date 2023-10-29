const express = require('express');
const routes = express.Router();
const CoolWear = require('./controller');

routes.get('/api/getUserData', CoolWear.getUserData);
routes.get('/api/logout', CoolWear.logoutUser);

routes.post('/api/SignUpUser', CoolWear.singUpUser);
routes.post('/api/loginUser',CoolWear.loginUser);
routes.post('/api/forgetPassword',CoolWear.forgetPassword);
//routes.post('/api/updateUser',CoolWear.updateUser);

module.exports = routes;
