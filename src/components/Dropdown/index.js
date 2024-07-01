import "./Dropdown.css";

function Dropdown(props) {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select required={props.required}>
        {/* Recebendo os itens do array e mapeando os itens para a tag <option> */}
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
