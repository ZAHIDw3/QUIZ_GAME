import { useState } from "react";
import './components/Game.css'
import HomePagina from "./components/HomePagina";
import CapturePagina from "./components/CapturePagina";
import GamePagina from "./components/GamePagina";
import FinalPagina from "./components/FinalPagina";
import SeeAnswers from "./components/SeeAnswers";

function App() {

  const [pagina, setPagina] = useState('Home')
  const [puntuacion, setPuntuacion] = useState(0);

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (

    <div className="container mt-2">

      {
        pagina === 'Home' && (
          <div>
            <HomePagina
              setPagina={setPagina}
            />
          </div>
        )
      }

      {
        pagina === 'Capture' && (
          <div>
            <CapturePagina
              setPagina={setPagina}
              listQuestions={listQuestions}
              setListQuestions={setListQuestions}
            />
          </div>
        )
      }

      {

        pagina === 'Game' && (
          <div>
            <GamePagina
              pagina={pagina}
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Finish' && (
          <div>
            <FinalPagina
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Answers' && (
          <div>
            <SeeAnswers
              setPagina={setPagina}
              listQuestions={listQuestions}
            />
          </div>
        )
      }

    </div>
  )
}

export default App
