import "./Collaborator.css";

export default function Collaborator({nome, cargo, imagem}) {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h4>{cargo}</h4>
      </div>
    </div>
  );
}
