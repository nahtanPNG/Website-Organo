import { useState } from "react";
import Banner from "./components/Banner/Banner.js";
import Form from "./components/Form/index.js";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]); //Pegando os colaboradores antigos e adicionando o novo
    console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        aoCadastrarColaborador={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
