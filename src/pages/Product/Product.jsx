import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import ProductsCard from "../../components/layouts/ProductsCard/ProductsCard";
import { getProducts } from "../../server/Api";
import Footer from "../../../src/components/Footer/Footer";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos: ", error);
      });
  }, []);

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        products={products}
        setSearchResults={setSearchResults}
      />

      <section className="productsList">
        {searchResults.map((product) => (
          <ProductsCard
            key={product.id_product}
            imgCard={product.img_product}
            titleCard={product.name_product}
            priceCard={product.price_product}
            descriptionCard={product.description_product}
            stockCard={product.stock_product}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};
