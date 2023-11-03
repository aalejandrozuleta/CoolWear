export default function Seeker({ searchTerm, setSearchTerm, products, setSearchResults }) {
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // filter objects  
    const filteredProducts = products.filter((product) =>
      product.name_product && product.name_product.toLowerCase().includes(term.toLowerCase())
    );
    console.log('Productos filtrados:', filteredProducts);
    //update date seeker
    setSearchResults(filteredProducts);
  };

  return (
    <div id="seekerContent">
      <input
        type="text"
        id="seekerInput"
        placeholder="Buscador"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
