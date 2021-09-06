import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      image:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXJhh6f/200/200/original?country=br",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      image:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXDlz7u/200/200/original?country=br",
    },
    {
      id: 3,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      image:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzX7pJAe/200/200/original?country=br",
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
      image:
        "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXxD5Xb/200/200/original?country=br",
    },
    {
      id: 5,
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
      image:
        "https://trimais.vteximg.com.br/arquivos/ids/1003097-1000-1000/foto_original.jpg?v=637395796273370000",
    },
    {
      id: 6,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      image:
        "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Lata-473-ml-Coca-Cola-PNG.png",
    },
    {
      id: 7,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      image:
        "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Fanta-Laranja-PNG.png",
    },
    {
      id: 8,
      name: "Fanta Uva",
      category: "Bebidas",
      price: 4.99,
      image:
        "https://trimais.vteximg.com.br/arquivos/ids/1019999-1000-1000/foto_original.jpg?v=637490859270270000",
    },
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
