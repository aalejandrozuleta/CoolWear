import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from 'axios';
import CarShopImg from "../../../../public/assets/main/carCash.svg";

function PropsProduct({
  id_product,
  imgProduct,
  nameProduct,
  descriptionProduct,
  priceProduct,
  stockProduct,
  addToCart,
}) {
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setIsAddToCartDisabled(quantity > stockProduct);
  }, [quantity, stockProduct]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 1);
  };

  const handleAddToCart = async () => {
    try {
      if (isAddToCartDisabled) {
        alert("La cantidad seleccionada supera la disponibilidad del producto");
      } else {
        // Update el stock local
        const updatedStock = stockProduct - quantity;
        addToCart({
          id_product,
          imgProduct,
          nameProduct,
          priceProduct,
          descriptionProduct,
          stockProduct: updatedStock,
          quantity,
        });
  
        // update the stock in the server
        await axios.post('/api/updateProductQuantity', {
          id_product: id_product,
          newQuantity: updatedStock,
        });
  
        console.log('Respuesta del servidor: Stock actualizado con éxito');
        console.log(`Añadido al carrito - Cantidad: ${quantity}`);
        closeModal();
      }
    } catch (error) {
      console.error('Error al procesar la operación:', error);
    }
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
            <h3>Información de esta prenda</h3>
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
            <div className="addShopCar">
              <input
                type="number"
                id="stockProductShop"
                defaultValue={1}
                min={1}
                onChange={handleQuantityChange}
              />
              <figure className="addProductCar">
                <img
                  src={CarShopImg}
                  alt=""
                  onClick={handleAddToCart}
                  disabled={isAddToCartDisabled}
                />
              </figure>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PropsProduct;
