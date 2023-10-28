import { Link } from "react-router-dom";
import UserLogin from "../../../public/assets/main/userLogin.svg";
import NightModeToggle from "../layouts/nightMode/NightMode";
import LogoCompany from "../../../public/assets/main/logoNoneBackground.png";
import CarShop from "../layouts/carShop/CarShop";


export const Header = () => {
    const linkNav = [
        {
            path: "/",
            text: "Inicio",
        },
        {
            path: "/product",
            text: "Productos",
            submenu: [
                {
                    path: "/product#Camisas",
                    text: "Camisas",
                },
                {
                    path: "/product#Pantalones",
                    text: "Pantalones",
                },
                {
                    path: "/product#Zapatos",
                    text: "Zapatos",
                },
            ],
        },
        {
            path: "/about",
            text: "Nosotros",
        },
    ];

    const renderSubmenu = (submenu) => (
        <ul className="submenuNavMain">
            {submenu.map((subLink, subIndex) => (
                <li key={subIndex}>
                    <Link to={subLink.path}>{subLink.text}</Link>
                </li>
            ))}
        </ul>
    );

    const SubmenuLogin = [
        {
            path: "/login",
            text: "Iniciar Sesión",
        },
        {
            path: "/signUp",
            text: "Registrar",
        },
    ];

    return (
        <header>
            <figure id="logoCompany">
                <img
                    src={LogoCompany}
                    alt="Este es el logo oficial de nuestra empresa"
                />
            </figure>

            <nav id="navBarMain">
                <ul id="menuMain">
                    {linkNav.map(({ text, path, submenu }, index) => (
                        <li key={index}>
                            {submenu ? (
                                <Link to={submenu[0].path}>{text}</Link>
                            ) : (
                                <Link to={path}>{text}</Link>
                            )}
                            {submenu && renderSubmenu(submenu)}
                        </li>
                    ))}
                </ul>
            </nav>

            <CarShop />

            <div id="seekerContent">
                <input type="text" id="seekerInput" placeholder="Buscador" />
            </div>

            
                <li id="userLogin">
                    <img
                        id="userLoginImg"
                        src={UserLogin}
                        alt="Esto es la imagen para registrarse"
                    />
                    <ul className="submenuNavLogin">
                        {SubmenuLogin.map(({ text, path }, index) => (
                            <li key={index}>
                                <Link to={path}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            <NightModeToggle />
        </header>
    );
};
