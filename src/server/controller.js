// controller.js
const db = require('./bd');

const controller = {};

controller.singUpUser = (req, res) => { 
  const register = req.body;  // total date singUp
  db.query('INSERT INTO USER SET ?', [register], (err, result) => { 
    if (err) { // error message
      console.error('Error al insertar el usuario: ' + err.message);
      res.redirect('/signUp');
    } else { // correct result
      res.redirect('/login');
    }
  });
};

controller.loginUser = (req, res) => {
  const email = req.body.email_user; //email
  const password = req.body.password_user; //password

  db.query('SELECT * FROM USER WHERE email_user = ? AND password_user = ?', [email, password], (err, results) => {
    if (err) { //error 
      console.error('Error al insertar el usuario: ' + err.message);
      res.redirect('/login');
    } else {
      if (results.length === 0) {
        console.log('User not found'); // User doesn't exist
        res.redirect('/login'); // Redirect to login page or show an error message
      } else {
        console.log('User logged in successfully');
        res.redirect('/'); // redirect Home page
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
      // error
      res.status(500).json({ error: "An error occurred" });
    } else {
      // validation user exist
      if (results.length === 0) {
        // User not exist
        res.status(404).json({ error: "User not found" });
      } else {
        // Update the user password
        db.query('UPDATE USER SET password_user = ? WHERE email_user = ? AND phone_user = ?', [password, email, phone], (updateErr, updateResults) => {
          if (updateErr) {
            console.error("Error:", updateErr);
            // Handle the update error
            res.status(500).json({ error: "An error occurred while updating the password" });
          } else {
            res.redirect('/login'); 
          }
        });
      }
    }
  });
}



module.exports = controller;
