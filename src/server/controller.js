// controller.js
const { redirect } = require("react-router-dom");
const db = require("./bd");
const controller = {};

controller.singUpUser = (req, res) => {
  const register = req.body; //dates login
  db.query("INSERT INTO USER SET ?", [register], (err, result) => {
    if (err) {
      console.error("Error al insertar el usuario: " + err.message);
      res.redirect("/signUp");
    } else {
      res.redirect("/login");
    }
  });
};

controller.loginUser = (req, res) => {
  const email = req.body.email_user;
  const password = req.body.password_user;

  db.query(
    "SELECT * FROM USER WHERE email_user = ? AND password_user = ?",
    [email, password],
    (err, results) => {
      if (err) {
        console.error("Error al insertar el usuario: " + err.message);
        res
          .status(500)
          .json({ success: false, message: "Error al insertar el usuario" });
      } else {
        if (results.length === 0) {
          console.log("Usuario no encontrado");
          res
            .status(401)
            .json({ success: false, message: "Usuario no encontrado" });
        } else {
          // Store cookies authorized
          const user = results[0];
          req.session.user = user;
          req.session.isLoggedIn = true;

          //validate if user is la dmin
          req.session.isAdmin = user.email_user === "admin@admin" && user.password_user === "admin";

          console.log('Usuario autenticado con éxito');
          res.status(200).json({ success: true, message: "Usuario autenticado con éxito", isAdmin: req.session.isAdmin });
        }
      }
    }
  );
};

controller.forgetPassword = (req, res) => {
  const email = req.body.email_user;
  const phone = req.body.phone_user;
  const password = req.body.password_user;

  db.query(
    "SELECT * FROM USER WHERE email_user = ? AND phone_user = ?",
    [email, phone],
    (err, results) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Ocurrió un error" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Usuario no encontrado" });
        } else {
          db.query(
            "UPDATE USER SET password_user = ? WHERE email_user = ? AND phone_user = ?",
            [password, email, phone],
            (updateErr, updateResults) => {
              if (updateErr) {
                console.error("Error:", updateErr);
                res
                  .status(500)
                  .json({
                    error: "Ocurrió un error al actualizar la contraseña",
                  });
              } else {
                console.log("Contraseña actualizada");
                res.redirect("/login");
              }
            }
          );
        }
      }
    }
  );
};

controller.getUserData = (req, res) => {
  if (!req.session.user) {
    return res
      .status(401)
      .json({ error: "No se ha autenticado ningún usuario." });
  }

  const userId = req.session.user.id_user;
  const sql = "SELECT * FROM USER WHERE id_user = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error al obtener datos del usuario: ", err);
      res.status(500).json({ error: "Error al obtener datos del usuario" });
    } else {
      if (results.length > 0) {
        const userData = results[0];
        console.log("Datos del usuario obtenidos con éxito:", userData);
        res.json(userData);
      } else {
        res.status(404).json({ error: "Usuario no encontrado" });
      }
    }
  });
};

controller.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
      res.status(500).json({ error: "Error al cerrar sesión" });
    } else {
      res.redirect("/login");
    }
  });
};

controller.getProducts = (req, res) => {
  db.query("SELECT * FROM PRODUCT", (err, results) => {
    if (err) {
      console.error("Error al obtener productos:", err);
      res.status(500).json({ error: "Error al obtener productos" });
    } else {
      console.log("Productos obtenidos con éxito");
      res.status(200).json(results);
    }
  });
};

controller.updateProductQuantity = (req, res) => {
  try {
    const productId = parseInt(req.body.id_product);
    // validation id product is valided
    if (isNaN(productId)) {
      console.error("El valor de productId no es un número válido:", productId);
      res
        .status(400)
        .json({ error: "El valor de productId no es un número válido" });
      return;
    }

    const newQuantity = req.body.newQuantity;
    console.log(newQuantity);

    // Validation for stock the producto
    db.query(
      "SELECT * FROM PRODUCT WHERE id_product = ?",
      [productId],
      (selectErr, selectResult) => {
        if (selectErr) {
          console.error(
            "Error al verificar la existencia del producto:",
            selectErr
          );
          res
            .status(500)
            .json({
              error: "Error al verificar la existencia del producto",
              details: selectErr.message,
            });
        } else if (selectResult.length === 0) {
          console.error(
            "El producto con ID",
            productId,
            "no existe en la base de datos"
          );
          res
            .status(404)
            .json({
              error: "Producto no encontrado",
              details: "El producto no existe en la base de datos",
            });
        } else {
          // update producto
          db.query(
            "UPDATE PRODUCT SET stock_product = ? WHERE id_product = ?",
            [newQuantity, productId],
            (updateErr, updateResult) => {
              if (updateErr) {
                console.error(
                  "Error al actualizar la cantidad de productos:",
                  updateErr
                );
                res
                  .status(500)
                  .json({
                    error: "Error al actualizar la cantidad de productos",
                    details: updateErr.message,
                  });
              } else {
                console.log("Resultado de la actualización:", updateResult);
                console.log("Cantidad de productos actualizada con éxito");
                res
                  .status(200)
                  .json({
                    success: true,
                    message: "Cantidad de productos actualizada con éxito",
                  });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    console.error("Error en el controlador:", error);
    res
      .status(500)
      .json({ error: "Error interno del servidor", details: error.message });
  }
};

controller.returnProductQuantity = (req, res) => {
  try {
    const productId = parseInt(req.body.id_product);

    if (isNaN(productId)) {
      console.error("El valor de productId no es un número válido:", productId);
      res
        .status(400)
        .json({ error: "El valor de productId no es un número válido" });
      return;
    }

    const returnedQuantity = req.body.returnedQuantity;
    console.log(returnedQuantity);

    // Validar la existencia del producto
    db.query(
      "SELECT * FROM PRODUCT WHERE id_product = ?",
      [productId],
      (selectErr, selectResult) => {
        if (selectErr) {
          console.error(
            "Error al verificar la existencia del producto:",
            selectErr
          );
          res
            .status(500)
            .json({
              error: "Error al verificar la existencia del producto",
              details: selectErr.message,
            });
        } else if (selectResult.length === 0) {
          console.error(
            "El producto con ID",
            productId,
            "no existe en la base de datos"
          );
          res
            .status(404)
            .json({
              error: "Producto no encontrado",
              details: "El producto no existe en la base de datos",
            });
        } else {
          // Devolver la cantidad al stock del producto
          const currentStock = selectResult[0].stock_product;
          const updatedStock = currentStock + returnedQuantity;

          db.query(
            "UPDATE PRODUCT SET stock_product = ? WHERE id_product = ?",
            [updatedStock, productId],
            (updateErr, updateResult) => {
              if (updateErr) {
                console.error(
                  "Error al devolver la cantidad de productos:",
                  updateErr
                );
                res
                  .status(500)
                  .json({
                    error: "Error al devolver la cantidad de productos",
                    details: updateErr.message,
                  });
              } else {
                console.log("Resultado de la devolución:", updateResult);
                console.log("Cantidad de productos devuelta con éxito");
                res
                  .status(200)
                  .json({
                    success: true,
                    message: "Cantidad de productos devuelta con éxito",
                  });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    console.error("Error en el controlador:", error);
    res
      .status(500)
      .json({ error: "Error interno del servidor", details: error.message });
  }
};

controller.returnProductsQuantity = async (req, res) => {
  try {
    // Obtén los productos del cuerpo de la solicitud
    const products = req.body.products;

    // Validar que la propiedad 'products' sea un array válido
    if (!Array.isArray(products)) {
      console.error("La propiedad products no es un array válido:", products);
      res
        .status(400)
        .json({ error: "La propiedad products no es un array válido" });
      return;
    }

    // Realizar las actualizaciones en la base de datos para devolver las cantidades al stock
    for (const product of products) {
      // Verificar que las propiedades necesarias estén presentes en el objeto product
      if (!product || isNaN(product.id_product) || isNaN(product.quantity)) {
        console.error("Objeto de producto inválido:", product);
        res.status(400).json({ error: "Objeto de producto inválido" });
        return;
      }

      const productId = product.id_product;
      const returnedQuantity = product.quantity;

      // Actualizar la cantidad de productos en la base de datos
      try {
        await db
          .promise()
          .query(
            "UPDATE PRODUCT SET stock_product = stock_product + ? WHERE id_product = ?",
            [returnedQuantity, productId]
          );
      } catch (updateErr) {
        console.error(
          "Error al devolver la cantidad de productos al stock:",
          updateErr
        );
        res
          .status(500)
          .json({
            error: "Error al devolver la cantidad de productos al stock",
            details: updateErr.message,
          });
        return;
      }
    }

    console.log("Cantidades devueltas al stock con éxito");
    res
      .status(200)
      .json({
        success: true,
        message: "Cantidades devueltas al stock con éxito",
      });
  } catch (error) {
    console.error(
      "Error en el controlador de devolución de cantidades al stock:",
      error
    );
    res
      .status(500)
      .json({ error: "Error interno del servidor", details: error.message });
  }
};

controller.createProduct = (req, res) => {
  const imgProduct = req.body.imgProduct;
  const nameProduct = req.body.nameProduct;
  const descriptionProduct = req.body.descriptionProduct;
  const priceProduct = req.body.priceProduct;
  const quantityProduct = req.body.quantityProduct;
  const optionsCategory = req.body.optionsCategory;
  

  const sql = 'INSERT INTO PRODUCT (img_product, name_product, description_product, price_product, stock_product, fk_category_id) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(sql, [imgProduct, nameProduct, descriptionProduct, priceProduct, quantityProduct, optionsCategory], (err, result) => {
    if (err) {
      console.error('Error al agregar el producto:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Producto agregado correctamente');
      // res.status(200).send('Producto agregado correctamente');
      res.redirect("/");

    }
  });
}

module.exports = controller;
