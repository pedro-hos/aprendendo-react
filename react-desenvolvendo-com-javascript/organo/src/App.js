import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

const times = [
  {
    nome: "Programação",
    corPrimaria: "#57C278",
    corSecundaria: "#D9F7E9",
  },
  {
    nome: "Front-End",
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF",
  },
  {
    nome: "Data Sciense",
    corPrimaria: "#A6D157",
    corSecundaria: "#F0F8E2",
  },
  {
    nome: "Devops",
    corPrimaria: "#E06B69",
    corSecundaria: "#FDE7E8",
  },
  {
    nome: "UX e Design",
    corPrimaria: "#D86EBF",
    corSecundaria: "#FAE5F5",
  },
  {
    nome: "Mobile",
    corPrimaria: "#FEBA05",
    corSecundaria: "#FFF5D9",
  },
  {
    nome: "Inovação e Gestão",
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF",
  },
];

function App() {
  const [colaboradores, setColaboradore] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}
      
    </div>
  );
}

export default App;
