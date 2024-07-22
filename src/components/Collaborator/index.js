import "./Collaborator.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Collaborator({
  nome,
  cargo,
  imagem,
  cor,
  aoDeletar,
}) {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
