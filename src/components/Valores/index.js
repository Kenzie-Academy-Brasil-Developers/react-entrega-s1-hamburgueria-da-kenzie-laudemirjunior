import "./style.css";

const Valores = ({ currentSale, setCurrentSale }) => {
  const limparCarrinho = () => {
    setCurrentSale([]);
  };

  return (
    <div className="valorTotal">
      <button className="botaoLimpar" onClick={() => limparCarrinho()}>
        Limpar Carrinho
      </button>
      Total: R${" "}
      {currentSale
        .reduce(
          (accumulator, valorAtual) => accumulator + Number(valorAtual.price),
          0
        )
        .toFixed(2)}
      <button className="compraConcluida" onClick={() => limparCarrinho()}>
        Concluir compra
      </button>
    </div>
  );
};

export default Valores;
