import SubstractImg from '../../../../public/assets/main/carSubstract.svg';

export default function CarShopItems() {
  return (
    <div className="productCarShopItem">
      <div className="productCarShopInfo">
        <p>Producto: </p>
        <p>Precio: </p>
        <p>Cantidad: </p>
      </div>
      <figure className="subsTractImgProduct">
        <img src={SubstractImg} alt="" />
      </figure>
    </div>
  );
}
