import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const ProductCreate = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <Header />
      <div id="blockProductForm">
        <div>
          <h2>Crea tu producto</h2>
        </div>
        <form action="/api/createProduct" method="post" id="formProductCreate">
          <input 
          type="file" 
          className="inputProductCreate"
          id="imgProduct"
          name="imgProduct"
          />
          <input
            type="text"
            placeholder="Ingrese el nombre del producto"
            className="inputProductCreate"
            id="nameProduc"
            name="nameProduct"
          />
          <input
            type="text"
            placeholder="Ingrese la descripción del producto"
            className="inputProductCreate"
            id="descriptionProduct"
            name="descriptionProduct"
          />
          <input
            type="number"
            placeholder="Ingrese el precio del producto"
            className="inputProductCreate"
            id="priceProduct"
            name="priceProduct"
          />
          <input
            type="number"
            placeholder="Ingrese la cantidad del producto"
            className="inputProductCreate"
            id="quantityProduct"
            name="quantityProduct"
          />
          <select
            value={selectedOption}
            onChange={handleSelect}
            id="optionsCategory"
            name="optionsCategory"
          >
            <option value="">Categoria</option>
            <option value="1">Camisas</option>
            <option value="2">Chaquetas</option>
            <option value="3">Zapatos</option>
          </select>

          <input type="Submit" value="submit" id="btnSubmitCreate" />
        </form>
      </div>
      <Footer/>
    </div>
  );
};
