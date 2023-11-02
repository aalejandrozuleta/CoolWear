import CardImg from "../../../../public/assets/main/carCash.svg";
import PropsProduct from "../PropsProduct/PropsProduct";

export default function ProductsCard({ imgCard, titleCard,priceCard }) {
  return (
    <article className="cardProduct">
      <figure className="blockImgProduct">
        <img src={imgCard} alt="Esta es la imagen del producto" />
      </figure>
      <div className="infoProductCard">
      <p className="titleProductCard">{titleCard}</p>
      <p className="priceProductCard">{priceCard}</p>
      </div>
      <figure className="blockImgCarAdd">
        <PropsProduct 
            imgProduct={imgCard}
            nameProduct={titleCard}
            priceProduct={priceCard}
        />
        <img src={CardImg} alt="Agregar al carrito" />
      </figure>
    </article>
  );
}
