// server.js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5174;
const routes = require('./server/routes');
const db = require('./server/bd'); 
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex'); //paswords cookies
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(session({
  secret: secretKey, 
  resave: false,
  saveUninitialized: true,
}));

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
  console.log('Clave secreta:', secretKey);
});
