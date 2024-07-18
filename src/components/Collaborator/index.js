import "./Collaborator.css";

export default function Collaborator({nome, cargo, imagem, corFundo}) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: corFundo}}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h4>{cargo}</h4>
      </div>
    </div>
  );
}
