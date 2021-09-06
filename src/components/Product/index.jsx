import "./style.css";

import { useState } from "react";

const Product = ({ currentSale, setCurrentSale }) => {
  const handleClick = (removeItem) => {
    setCurrentSale(currentSale.filter((item) => item !== removeItem));
  };

  return (
    <div>
      <h1>Carrinho</h1>
      <div className="produtosVendidos">
        {currentSale.map((item) => {
          return (
            <div className="produtoVendido">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>R$ {item.price}</p>
              <button
                className="retirarCarrinho"
                onClick={() => handleClick(item)}
              >
                Retirar do carrinho
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
