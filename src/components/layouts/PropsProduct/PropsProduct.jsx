import React, { useState } from "react";
import Modal from "react-modal";

import CarShopImg from "../../../../public/assets/main/carCash.svg";

function PropsProduct({
  imgProduct,
  nameProduct,
  descriptionProduct,
  priceProduct,
  stockProduct,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div id="blockBtnWatch">
        <button onClick={openModal} id="btnWatchProduct">
          ver producto
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"modalBox"}
      >
        <div id="modalProducts">
          <div id="headerModal">
            <h3>Infromacion de esta prenda</h3>
            <button onClick={closeModal}>X</button>
          </div>
          <div id="contenProductModal">
            <figure className="imgProduct">
              <img src={imgProduct} alt="" />
            </figure>

            <div className="informationProductModal">
              <h3 className="nameProduct">{nameProduct}</h3>

              <p className="descriptionProduct">{descriptionProduct}</p>

              <p className="priceProduct">$ {priceProduct}</p>

              <p className="stockProduct">
                Cantidad del producto: {stockProduct}
              </p>
            </div>

            <figure className="addProductCar">
              <img src={CarShopImg} alt="" />
            </figure>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PropsProduct;
