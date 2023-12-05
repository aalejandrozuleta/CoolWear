import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import ProductsCard from "../../components/layouts/ProductsCard/ProductsCard";
import { getProducts } from "../../server/Api";
import Footer from "../../../src/components/Footer/Footer";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todo");
  const [cartItems, setCartItems] = useState([]);

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

  useEffect(() => {
    console.log("selectedCategory cambiado a:", selectedCategory);

    if (selectedCategory) {
      const categoryIDs = getCategoryID(selectedCategory);
      if (categoryIDs.length === 0) {
        setSearchResults(products);
      } else {
        const filteredProducts = products.filter((product) =>
          categoryIDs.includes(product.fk_category_id)
        );
        console.log("Productos filtrados: ", filteredProducts);
        setSearchResults(filteredProducts);
      }
    }
  }, [selectedCategory, products]);

  const getCategoryID = (categoryName) => {
    switch (categoryName) {
      case "Camisas":
        console.log("camisas");
        return [1];
      case "Sacos":
        console.log("sacos");
        return [2];
      case "Zapatos":
        console.log("zapatos");
        return [3];

      case "Catalogo":
        return [1, 2, 3];

      default:
        return [];
    }
  };

  const addToCart = (product) => {
    //copy products actuality
    const updatedCartItems = [...cartItems, product];
  
    //update state cart
    setCartItems(updatedCartItems);
  
    // save in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    // get cart items the localStorage
    const storedCartItems = localStorage.getItem("cartItems");
  
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        products={products}
        setSelectedCategory={setSelectedCategory}
        setSearchResults={setSearchResults}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      <section className="productsList">
        {searchResults.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <ProductsCard
            key={product.id_product}
            id_product={product.id_product}
            imgCard={product.img_product}
            titleCard={product.name_product}
            priceCard={product.price_product}
            descriptionCard={product.description_product}
            stockCard={product.stock_product}
            addToCart={addToCart}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};
