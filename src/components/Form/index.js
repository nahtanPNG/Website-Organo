import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Formulario.css";

function Form() {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const handleSubmit = (event) => {
    event.preventDefault(); //Previne o comportamento padrão do evento
    console.log("Form submetido com sucesso");
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput required={true} label="Nome" placeholder="Digite seu nome" />
        <TextInput required={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
        <Dropdown required={true} itens={times} label="Time" />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;
