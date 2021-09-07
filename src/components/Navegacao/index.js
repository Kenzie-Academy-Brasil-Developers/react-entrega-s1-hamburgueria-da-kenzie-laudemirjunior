import { TiHome } from "react-icons/ti";
import "./style.css";

const Navegacao = ({ buscas, setBuscas, showProducts }) => {
  return (
    <header>
      <TiHome className="home" onClick={() => showProducts("")} />
      <input
        className="imputBusca"
        value={buscas}
        onChange={(evt) => setBuscas(evt.target.value)}
      ></input>
      <button className="BotaoBusca" onClick={() => showProducts(buscas)}>
        Buscar
      </button>
    </header>
  );
};

export default Navegacao;
