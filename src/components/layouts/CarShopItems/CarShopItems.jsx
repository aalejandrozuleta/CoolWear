import SubstractImg from '../../../../public/assets/main/carSubstract.svg';

export default function CarShopItems({ nameProduct, priceProduct, quantity,onRemove }) {
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
          onClick={() => onRemove({ nameProduct, priceProduct, quantity })}
        />
      </figure>
    </div>
  );
}
