import { useState } from "react";
import { loginUser } from "../../../server/Api";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// import img
import UserSignUpImg from "../../../public/assets/login/userSingUp.svg";
import EmailImg from "../../../public/assets/login/emailOption.svg";
import PasswordImg from "../../../public/assets/login/padlock.svg";

export default function Login() {
  //optios change login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  //
  //function api
  const handleLogin = () => {
    loginUser(email, password)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", response.data.isAdmin);
          setIsLoggedIn(true);
          setAdmin(response.data.isAdmin);
        } else {
          console.error("Login failed.");
        }
      })
      .catch((error) => {
        console.error("Request error:", error);
      });
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <section id="blockForm">
        <div id="backgroundSignUp">
          <figure id="imgUserSignUp">
            <h2>Inicia Sesión</h2>
            <img src={UserSignUpImg} alt="" />
            <p>Tu registro en las mejores manos</p>
          </figure>
        </div>
        <form action="/api/loginUser" method="post" id="formUser">
          <div className="formSet">
            <label htmlFor="email_user" className="labelForm">
              Ingrese su correo
            </label>
            <div className="blockInput">
              <img className="imgForm" src={EmailImg} alt="" />
              <input
                className="inputForm"
                type="email"
                id="email_user"
                name="email_user"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="formSet">
            <label htmlFor="password_user" className="labelForm">
              Ingrese su Contraseña
            </label>
            <div className="blockInput">
              <img className="imgForm" src={PasswordImg} alt="" />
              <input
                className="inputForm"
                type="password"
                id="password_user"
                name="password_user"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div id="optionsForm">
            <a href="/forgetPassword">Olvidé mi contraseña</a>
          </div>
          <div className="btnSubmit">
            <button type="button" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}
