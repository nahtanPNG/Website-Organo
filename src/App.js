import { useState } from "react";
import Banner from "./components/Banner/Banner.js";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const times = [
    {
      nome: "Programação",
      corFundo: "#D9F7E9",
      corDestaque: "#57C278",
    },
    {
      nome: "Front-End",
      corFundo: "#E8F8FF",
      corDestaque: "#82CFFA",
    },
    {
      nome: "Data Science",
      corFundo: "#F0F8E2",
      corDestaque: "#A6D157",
    },
    {
      nome: "Devops",
      corFundo: "#FDE7E8",
      corDestaque: "#E06B69",
    },
    {
      nome: "UX e Design",
      corFundo: "#FAE9F5",
      corDestaque: "#DB6EBF",
    },
    {
      nome: "Mobile",
      corFundo: "#FFF5D9",
      corDestaque: "#FFBA05",
    },
    {
      nome: "Inovacão e Gestão",
      corFundo: "#FFEEDF",
      corDestaque: "#FF8A29",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]); //Pegando os colaboradores antigos e adicionando o novo
    console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((times) => times.nome)}
        aoCadastrarColaborador={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => {
        return (
          <Team
            key={time.nome}
            title={time.nome}
            corFundo={time.corFundo}
            corDestaque={time.corDestaque}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        );
      })}
    </div>
  );
}

export default App;
