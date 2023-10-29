// api.js
import axios from "axios";

// validation login true
export const loginUser = (email, password) => {
    return axios.post("/api/loginUser", {
        email_user: email,
        password_user: password,
    });
};
