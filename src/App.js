import { useState } from "react";
import Banner from "./components/Banner/Banner.js";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer/index.js";
import { v4 as uuid4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuid4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuid4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuid4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuid4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuid4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuid4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuid4(),
      nome: "Inovacão e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]); //Pegando os colaboradores antigos e adicionando o novo
  };

  function deletarColaborador() {
    console.log("Deletar colaborador");
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((times) => times.nome)}
        aoCadastrarColaborador={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {colaboradores.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              color: "#6278F7",
              fontSize: "40px",
              textAlign: "center",
              borderBottom: "4px solid",
              display: "inline-block",
              paddingBottom: "8px",
            }}
          >
            Colaboradores
          </h1>
        </div>
      )}

      {times.map((time) => {
        return (
          <Team
            id={time.id}
            key={time.nome}
            title={time.nome}
            cor={time.cor}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
