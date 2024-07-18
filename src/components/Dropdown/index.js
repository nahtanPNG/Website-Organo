import "./Dropdown.css";

function Dropdown(props) {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.valor}
      >
        {/* Recebendo os itens do array e mapeando os itens para a tag <option> */}
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
