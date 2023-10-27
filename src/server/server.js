const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 5000;
const routes = require('./routes'); 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sena1234%',
  database: 'proyectoX'
});

app.use(express.urlencoded({
  extended: false 
}));

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});
app.use(routes); 

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
