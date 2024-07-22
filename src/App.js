import { useState } from "react";
import Banner from "./components/Banner/Banner.js";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer/index.js";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278",
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
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

  function mudarCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
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
