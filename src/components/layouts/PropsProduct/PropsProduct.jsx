import React, { useState } from "react";
import Modal from "react-modal";

function PropsProduct({
  imgProduct,
  nameProduct,
  descriptionProduct,
  priceProduct,
  stockProduct,
  categoryProduct,
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
      <button onClick={openModal} id="btnWatchProduct">ver producto</button>
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
            <figure>
              <img src={imgProduct} alt="" />
            </figure>

            <div id="informationProductModal">
              <h3>{nameProduct}</h3>

              <p>{descriptionProduct}</p>

              <p>{priceProduct}</p>

              <p>{stockProduct}</p>

              <p>{categoryProduct}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PropsProduct;
