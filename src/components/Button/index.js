import "./Button.css";

function Button(props) {
  return <button className="button">{props.children}</button>; //children = conteudo
}

export default Button;
