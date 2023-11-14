import React, { useState } from "react";
import CardImg from "../../../../public/assets/main/carCash.svg";
import PropsProduct from "../PropsProduct/PropsProduct";

export default function ProductsCard({
  imgCard,
  titleCard,
  descriptionCard,
  priceCard,
  stockCard,
  addToCart,
}) {
  const handleClick = () => {
    addToCart({
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
