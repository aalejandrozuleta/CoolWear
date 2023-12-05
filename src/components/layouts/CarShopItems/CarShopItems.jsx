import axios from 'axios';
import SubstractImg from '../../../../public/assets/main/carSubstract.svg';


export default function CarShopItems({ id_product, nameProduct, priceProduct, quantity, onRemove }) {
  const handleReturnQuantity = async () => {
    try {
      // Realizar la operación en la base de datos
      await axios.post('/api/returnProductQuantity', {
        id_product: id_product,
        returnedQuantity: quantity,
      });

      console.log('Respuesta del servidor: Cantidad devuelta al stock con éxito');
      onRemove();  // No necesitas pasar los argumentos aquí
      window.location.reload();
    } catch (error) {
      console.error('Error al procesar la operación:', error);
    }
  };

  return (
    <div className="productCarShopItem">
      <div className="productCarShopInfo">
        <p>{nameProduct} </p>
        <p> {priceProduct}</p>
        <p>Cantidad: {quantity} </p>
      </div>
      <figure className="subsTractImgProduct">
        <img
          src={SubstractImg}
          alt=""
          id='substractItem'
          onClick={handleReturnQuantity}
        />
      </figure>
    </div>
  );
}

