import "./style.css";
import Product from "../Product";

const MenuContainer = ({
  filteredProducts,
  handleClick,
  currentSale,
  setCurrentSale,
}) => {
  return (
    <div>
      <h1>Produtos</h1>
      <div className="produtos">
        {filteredProducts.map((item, index) => {
          return (
            <div className="produto" id={item.id} key={index}>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>R$ {item.price}</p>
              <button className="botaoCompra" onClick={() => handleClick(item)}>
                Adicionar ao carrinho
              </button>
            </div>
          );
        })}
      </div>
      <div className="carrinho">
        <Product currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    </div>
  );
};

export default MenuContainer;
