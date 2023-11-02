import { Header } from "../../components/Header/Header";
import ProductsCard from "../../components/layouts/ProductsCard/ProductsCard";


import Produc1Img from "../../../public/assets/product/shirts/armaniBlack.png";


export const Product = () => {
  return (
    <div>
      <Header />
      <section id="totalProducts">
        <section id="shirts">
          <article className="titleCategoryproduct">
            <h3>Camisas</h3>
          </article>
          <section className="productsList">
            <ProductsCard
              imgCard={Produc1Img}
              titleCard="esto es el producto numero 1"
              priceCard="$100"
            />
            
            <ProductsCard
              imgCard={Produc1Img}
              titleCard="esto es el producto numero 1"
              priceCard="$100"
            />

            <ProductsCard
              imgCard={Produc1Img}
              titleCard="esto es el producto numero 1"
              priceCard="$100"
            />
          </section>
        </section>
      </section>
    </div>
  );
};
