import Collaborator from "../Collaborator";
import "./Team.css";

function Team(props) {
  return (
    props.colaboradores.length > 0 && (
      <section className="team" style={{ backgroundColor: props.corFundo }}>
        <h3 style={{ borderColor: props.corDestaque }}>{props.title}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Collaborator
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default Team;
