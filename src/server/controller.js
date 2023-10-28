// controller.js
const db = require('./bd');

const controller = {};

controller.singUpUser = (req, res) => { 
  const register = req.body; 
  console.log(register);

  db.query('INSERT INTO USER SET ?', [register], (err, result) => { 
    if (err) {
      console.error('Error al insertar el usuario: ' + err.message);
      res.redirect('/signUp');
    } else {
      res.redirect('/login');
    }
  });
};

module.exports = controller;
