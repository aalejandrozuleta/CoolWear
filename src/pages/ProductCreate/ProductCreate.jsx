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
        <form action="" method="get" id="formProductCreate">
          <input type="file" className="inputProductCreate" />
          <input
            type="text"
            placeholder="Ingrese el nombre del producto"
            className="inputProductCreate"
          />
          <input
            type="text"
            placeholder="Ingrese la descripción del producto"
            className="inputProductCreate"
          />
          <input
            type="number"
            placeholder="Ingrese el precio del producto"
            className="inputProductCreate"
          />
          <input
            type="number"
            placeholder="Ingrese la cantidad del producto"
            className="inputProductCreate"
          />
          <select
            value={selectedOption}
            onChange={handleSelect}
            id="optionsCategory"
          >
            <option value="">Categoria</option>
            <option value="1">Camisas</option>
            <option value="2">Chaquetas</option>
            <option value="3">Zapatos</option>
          </select>

          <input type="button" value="submit" id="btnSubmitCreate" />
        </form>
      </div>
      <Footer/>
    </div>
  );
};
