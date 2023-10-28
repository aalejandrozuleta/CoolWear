// server.js

const express = require('express');
const app = express();
const port = 5174;
const routes = require('./server/routes');
const db = require('./server/bd'); 

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
