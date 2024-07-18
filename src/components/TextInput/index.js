import "./TextInput.css";

function TextInput(props) {
  function aoDigitado(evento) {
    props.aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

export default TextInput;
