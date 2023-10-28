import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import UserSignUpImg from "../../../public/assets/login/userSingUp.svg";
import EmailImg from "../../../public/assets/login/emailOption.svg";
import PasswordImg from "../../../public/assets/login/padlock.svg";

export default function Login() {
    return (
        <div>
            <Header />
            <section id="blockForm">
                <div id="backgroundSignUp">
                    <figure id="imgUserSignUp">
                        <h2>Regístrate</h2>
                        <img src={UserSignUpImg} alt="" />
                        <p>Tu registro en las mejores manos</p>
                    </figure>
                </div>

                <form action="/api/loginUser" method="post" id="formUser">
                    <div className="formSet">
                        <label htmlFor="" className="labelForm">
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
                            />
                        </div>
                    </div>

                    <div className="formSet">
                        <label htmlFor="" className="labelForm">
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
                            />
                        </div>
                    </div>

                    <div id="optionsForm">
                        {/* <link to="">Olvide mi contraseña </link> */}
                        <a href="">olvide mi contraseña</a>
                    </div>

                    <div className="btnSubmit">
                        <button type="submit">Iniciar Sesión</button>
                    </div>
                </form>
            </section>

            <Footer/>
        </div>
    );
}
