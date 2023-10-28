import CarShopImg from "../../../../public/assets/main/carShop.svg";
import CashImg from "../../../../public/assets/main/carCash.svg";
import SubstractImg from "../../../../public/assets/main/carSubstract.svg";
import CloseImg from "../../../../public/assets/main/closetOptions.svg";
import { useState } from "react";

function CarShop() {
    const [isCarShopVisible, setCarShopVisible] = useState(false);

    const toggleCarShopVisibility = () => {
        setCarShopVisible(!isCarShopVisible);
    };

    return (
        <figure id="carShopContent" onClick={toggleCarShopVisibility}>
            <img
                id="carShop"
                src={CarShopImg}
                alt="Esto es el carrito de compras"
            />

            {isCarShopVisible && (
                <div id="contenCarShop">
                    <div id="headerCarShop">
                        <img src={SubstractImg} alt="" />
                        <img src={CashImg} alt="" />
                        <img src={CloseImg} alt="" />
                    </div>
                    <div id="productList">
                        
                    </div>
                    <div id="footerCarShop">
                        <p>
                            Precio total: <span id="totalAmount">0</span>
                        </p>
                    </div>
                </div>
            )}
        </figure>
    );
}

export default CarShop;
