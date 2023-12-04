import PropsProduct from "../PropsProduct/PropsProduct";

export default function ProductsCard({
  id_product, 
  imgCard,
  titleCard,
  descriptionCard,
  priceCard,
  stockCard,
  addToCart,
}) {
  const handleClick = () => {
    addToCart({
      id_product,
      imgProduct: imgCard,
      nameProduct: titleCard,
      priceProduct: priceCard,
      descriptionProduct: descriptionCard,
      stockProduct: stockCard,
    });
  };

  return (
    <article className="cardProduct">
      <figure className="blockImgProduct">
        <img src={imgCard} alt="Esta es la imagen del producto" />
      </figure>
      <div className="infoProductCard">
        <p className="titleProductCard">{titleCard}</p>
        <p className="priceProductCard">{priceCard}</p>
      </div>
        <PropsProduct
          id_product={id_product} 
          imgProduct={imgCard}
          nameProduct={titleCard}
          priceProduct={priceCard}
          descriptionProduct={descriptionCard}
          stockProduct={stockCard}
          addToCart={addToCart}
        />
    </article>
  );
}
