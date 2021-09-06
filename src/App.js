import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
    { id: 8, name: "Cini", category: "Bebidas", price: 3.99 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);
  const [buscas, setBuscas] = useState("");

  const showProducts = (itemProcurado) => {
    setFilteredProducts(
      products.filter((item) => item.name.toLowerCase().includes(itemProcurado))
    );
    setBuscas("");
  };

  const handleClick = (productId) => {
    if (!currentSale.includes(productId)) {
      setCurrentSale([...currentSale, productId]);
    }
  };

  return (
    <div className="App">
      <h1>Hamburgueria</h1>
      <header>
        <input
          className="imputBusca"
          value={buscas}
          onChange={(evt) => setBuscas(evt.target.value)}
        ></input>
        <button className="BotaoBusca" onClick={() => showProducts(buscas)}>
          Buscar
        </button>
      </header>
      <MenuContainer
        filteredProducts={filteredProducts}
        handleClick={handleClick}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
      <div className="valorTotal">
        Total: R${" "}
        {currentSale
          .reduce(
            (accumulator, valorAtual) => accumulator + Number(valorAtual.price),
            0
          )
          .toFixed(2)}
      </div>
    </div>
  );
}

export default App;
