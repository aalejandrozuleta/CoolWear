import CarShopImg from "../../../../public/assets/main/carShop.svg";
import CashImg from "../../../../public/assets/main/carCash.svg";
import SubstractImg from "../../../../public/assets/main/carSubstract.svg";
import CloseImg from "../../../../public/assets/main/closetOptions.svg";
import { useState,useEffect } from "react";
import CarShopItems from "../CarShopItems/CarShopItems";

function CarShop({ cartItems }) {
  const [isCarShopVisible, setCarShopVisible] = useState(false);

  const toggleCarShopVisibility = () => {
    setCarShopVisible(!isCarShopVisible);
    //save visibiliti the cart in localStorage
    localStorage.setItem("isCarShopVisible", !isCarShopVisible);
  };

  function calculateTotalPrice(cartItems) {
    return cartItems.reduce((total, item) => total + item.priceProduct * item.quantity, 0).toFixed(2);
  }

  useEffect(() => {
    const storedVisibility = localStorage.getItem("isCarShopVisible");
  
    if (storedVisibility) {
      setCarShopVisible(JSON.parse(storedVisibility));
    }
  }, []);
  

  return (
    <figure id="carShopContent" onClick={toggleCarShopVisibility}>
      <img id="carShop" src={CarShopImg} alt="Esto es el carrito de compras" />

      {isCarShopVisible && (
        <div id="contenCarShop">
          <div id="headerCarShop">
            <img src={SubstractImg} alt="" />
            <img src={CashImg} alt="" />
            <img src={CloseImg} alt="" />
          </div>
          <div id="productList">
            {cartItems.map((item, index) => (
              <CarShopItems key={index} {...item} />
            ))}
          </div>
          <div id="footerCarShop">
            <p>
              Precio total: <span id="totalAmount">${calculateTotalPrice(cartItems)}</span>
            </p>
          </div>
        </div>
      )}
    </figure>
  );
}

export default CarShop;
