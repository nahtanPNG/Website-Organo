import "./TextInput.css";

function TextInput(props) {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}

export default TextInput;
