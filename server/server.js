// server.js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
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

app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
  console.log('Clave secreta:', secretKey);
});
