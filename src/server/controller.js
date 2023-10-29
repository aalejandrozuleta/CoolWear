// controller.js
const db = require('./bd');
const controller = {};

controller.singUpUser = (req, res) => { 
  const register = req.body;  // Datos totales para el registro
  db.query('INSERT INTO USER SET ?', [register], (err, result) => { 
    if (err) {
      console.error('Error al insertar el usuario: ' + err.message);
      res.redirect('/signUp');
    } else {
      res.redirect('/login');
    }
  });
};

controller.loginUser = (req, res) => {
  const email = req.body.email_user;
  const password = req.body.password_user;

  db.query('SELECT * FROM USER WHERE email_user = ? AND password_user = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error al insertar el usuario: ' + err.message);
      res.redirect('/login');
    } else {
      if (results.length === 0) {
        console.log('Usuario no encontrado');
        res.status(401).json({ success: false, message: "Usuario no encontrado" });
      } else {
        // Almacenar la información del usuario en la sesión
        const user = results[0];
        req.session.user = user;

        console.log('Usuario autenticado con éxito');
        res.status(200).json({ success: true, message: "Usuario autenticado con éxito" });
      }
    }
  });
};

controller.forgetPassword = (req, res) => {
  const email = req.body.email_user;
  const phone = req.body.phone_user;
  const password = req.body.password_user;

  db.query('SELECT * FROM USER WHERE email_user = ? AND phone_user = ?', [email, phone], (err, results) => {
    if (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Ocurrió un error" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        db.query('UPDATE USER SET password_user = ? WHERE email_user = ? AND phone_user = ?', [password, email, phone], (updateErr, updateResults) => {
          if (updateErr) {
            console.error("Error:", updateErr);
            res.status(500).json({ error: "Ocurrió un error al actualizar la contraseña" });
          } else {
            res.redirect('/login');
          }
        });
      }
    }
  });
};

controller.getUserData = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'No se ha autenticado ningún usuario.' });
  }

  const userId = req.session.user.id_user;
  const sql = 'SELECT * FROM USER WHERE id_user = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Error al obtener datos del usuario: ', err);
      res.status(500).json({ error: 'Error al obtener datos del usuario' });
    } else {
      if (results.length > 0) {
        const userData = results[0];
        console.log('Datos del usuario obtenidos con éxito:', userData);
        res.json(userData);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    }
  });
};

controller.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      res.status(500).json({ error: 'Error al cerrar sesión' });
    } else {
      res.redirect('/login'); // Redirige al usuario a la página de inicio de sesión
    }
  });
};


module.exports = controller;
