import axios from "axios";
import { useState, useEffect } from "react";
// validation login true
export const loginUser = (email, password) => {
  return axios.post("/api/loginUser", {
    email_user: email,
    password_user: password,
  }, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
};

export const handleLogout = () => {
  axios
    .get("/api/logout")
    .then(() => {
      localStorage.setItem("isLoggedIn", "false");
      window.location.href = "/login";
    })
    .catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
};

export function useFetchUserData() {
  const [user, setUser] = useState({
    name_user: "",
    phone_user: "",
    email_user: "",
    password_user: "",
  });

  useEffect(() => {
    axios
      .get("/api/getUserData")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario: ", error);
      });
  }, []);

  return user;
}

export const handleUpdateUser = (user) => {
  axios
    .post("/api/updateUser", user)
    .then((response) => {
      console.log("Datos del usuario actualizados con éxito.");
    })
    .catch((error) => {
      console.error("Error al actualizar datos del usuario: ", error);
    });
};

export const getProducts = async () => {
  try {
    const response = await axios.get("/api/getProducts");
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos: ", error);
    throw error;
  }
};
