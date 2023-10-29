import { Header } from "../../components/Header/Header";
import { useState } from "react";
import ImgUserDefault from "../../../public/assets/main/userLogin.svg";
import {
    handleLogout,
    handleUpdateUser,
    useFetchUserData,
} from "../../server/Api";
import { useNavigate } from "react-router-dom";

export default function UserSettings() {
    const user = useFetchUserData();
    const navigate = useNavigate(); // navegation import

    const handleLogoutAndRedirect = () => {
        handleLogout(); // Close settion
        localStorage.removeItem("isLoggedIn"); //remove login (true by false)
        navigate("/"); // render Home page
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div>
            <Header />
            <section id="informationUser">
                <div id="imgUser">
                    <label htmlFor="imageUpload">
                        <input
                            type="file"
                            id="imageUpload"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />
                        <img
                            src={selectedImage || ImgUserDefault}
                            alt="User"
                            id="userImg"
                        />
                    </label>
                </div>

                <form id="dataUser" onSubmit={handleUpdateUser}>
                    <div className="userdate">
                        <label htmlFor="name_user" className="labelInfo">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="inputInfo"
                            name="name_user"
                            id="name_user"
                            value={user.name_user}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="userdate">
                        <label htmlFor="phone_user" className="labelInfo">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            className="inputInfo"
                            name="phone_user"
                            id="phone_user"
                            value={user.phone_user}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="userdate">
                        <label htmlFor="email_user" className="labelInfo">
                            Correo
                        </label>
                        <input
                            type="text"
                            className="inputInfo"
                            name="email_user"
                            id="email_user"
                            value={user.email_user}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="userdate">
                        <label htmlFor="password_user" className="labelInfo">
                            Contraseña
                        </label>
                        <input
                            type="text"
                            className="inputInfo"
                            name="password_user"
                            id="password_user"
                            value={user.password_user}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="btnOptionUser">
                        <button
                            type="submit"
                            onClick={() => handleUpdateUser(user)}
                        >
                            Actualizar
                        </button>

                        <button onClick={handleLogoutAndRedirect}>Cerrar sesión</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
