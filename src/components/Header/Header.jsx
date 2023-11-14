import React from "react";
import { Link } from "react-router-dom";
import CarShop from "../layouts/carShop/CarShop";
import NightModeToggle from "../layouts/nightMode/NightMode";
import UserLogin from "../../../public/assets/main/userLogin.svg";
import UserSettingsImg from "../../../public/assets/main/settingsOption.svg";
import LogoCompany from "../../../public/assets/main/logoNoneBackground.png";
import Seeker from "../layouts/Seeker/Seeker";

export const Header = ({
  searchTerm,
  setSearchTerm,
  products,
  setSearchResults,
  setSelectedCategory,
  cartItems,
}) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
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
          path: "/product",
          text: "Camisas",
        },
        {
          path: "/product",
          text: "Sacos",
        },
        {
          path: "/product",
          text: "Zapatos",
        },
        {
          path: "/product",
          text: "Catalogo",
        }
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
          <Link
            to={subLink.path}
            onClick={() => handleCategoryClick(subLink.text)}
          >
            {subLink.text}
          </Link>
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

  const handleCategoryClick = (categoryName) => {
    console.log("Categoría seleccionada:", categoryName);
    setSelectedCategory(categoryName);
  };

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
                <Link
                  to={submenu[0].path}
                  onClick={() => handleCategoryClick(submenu[0].text)}
                >
                  {text}
                </Link>
              ) : (
                <Link to={path} onClick={() => handleCategoryClick(text)}>
                  {text}
                </Link>
              )}
              {submenu && renderSubmenu(submenu)}
            </li>
          ))}
        </ul>
      </nav>

      <CarShop cartItems={cartItems} /> 

      <Seeker
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        products={products}
        setSearchResults={setSearchResults}
      />

      {/* if isLogged true, change img */}
      {isLoggedIn ? (
        <Link to="/userSettings" id="userLogin">
          <img
            id="userLoginImg"
            src={UserSettingsImg}
            alt="Configuración de usuario"
          />
        </Link>
      ) : (
        <li id="userLogin">
          <img
            id="userLoginImg"
            src={UserLogin}
            alt="Esto es la imagen para registrarse"
          />
          <ul className="submenuNavLogin">
            {SubmenuLogin.map(({ text,path }, index) => (
              <li key={index}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </li>
      )}
      <NightModeToggle />
    </header>
  );
};
