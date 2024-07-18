import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Formulario.css";

function Form(props) {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Previne o comportamento padrão do evento
    props.aoCadastrarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextInput
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextInput
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <Dropdown
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          required={true}
          itens={times}
          label="Time"
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;
