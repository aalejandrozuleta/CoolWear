// db.js

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'rwo5jst0d7dgy0ri.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'co0ntnkoafwoqr6w',
  password: 'vji0t7ws50iehr37',
  database: 'w2kr728wocx4f7ls'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = db;
