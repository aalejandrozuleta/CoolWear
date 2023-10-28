import { useState } from 'react';
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NameImg from "../../../public/assets/main/userLogin.svg";
import PhoneImg from "../../../public/assets/login/celphone.svg";
import EmailImg from "../../../public/assets/login/emailOption.svg";
import PasswordImg from "../../../public/assets/login/padlock.svg";
import UserSignUpImg from "../../../public/assets/login/userSingUp.svg";

import { verificationName, verificationPhone, verificationEmail } from "./validation";

export default function SignUp() {
    const specialChars = /[@! "#$&/()=?¿*|]/;
    const numbers = /[0-9]/;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);

        const error = verificationName(value, specialChars, numbers);
        setNameError(error || '');
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);

        const error = verificationPhone(value, specialChars);
        setPhoneError(error || '');
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        const error = verificationEmail(value);
        setEmailError(error || '');
    };

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
                <form
                    action="/api/SignUpUser"
                    id="formUser"
                    method="post"
                    
                >
                    <div className="formSet">
                        <label htmlFor="" className="labelForm">
                            Ingrese su nombre
                        </label>
                        <div className="blockInput">
                            <img className="imgForm" src={NameImg} alt="" />
                            <input
                                className="inputForm"
                                type="text"
                                id="name_user"
                                name="name_user"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </div>
                        <span className="error">{nameError}</span>
                    </div>

                    <div className="formSet">
                        <label htmlFor="" className="labelForm">
                            Ingrese su teléfono
                        </label>
                        <div className="blockInput">
                            <img className="imgForm" src={PhoneImg} alt="" />
                            <input
                                className="inputForm"
                                type="text"
                                id="phone_user"
                                name="phone_user"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                        <span className="error">{phoneError}</span>
                    </div>

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
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <span className="error">{emailError}</span>
                    </div>

                    <div className="formSet">
                        <label htmlFor="" className="labelForm">
                            Ingrese su contraseña
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

                    <div className="btnSubmit">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
            </section>

            <Footer />
        </div>
    );
}
