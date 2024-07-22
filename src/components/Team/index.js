import Collaborator from "../Collaborator";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

function Team(props) {
  return (
    props.colaboradores.length > 0 && (
      <section className="team" style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
        <input
          value={props.cor}
          onChange={(evento) =>
            props.mudarCor(evento.target.value, props.title)
          }
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.cor }}>{props.title}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Collaborator
                key={colaborador.nome}
                cor={props.cor}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
}

export default Team;
