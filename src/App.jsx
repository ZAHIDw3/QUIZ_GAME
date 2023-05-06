import { useState } from "react";
import HomePagina from "./components/HomePagina";
import CapturePagina from "./components/CapturePagina";

function App() {

  const [pagina, setPagina] = useState('Home')

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) ||[]
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
            <h1>Game</h1>
            <button
              type="button"
              class="btn btn-success"
              onClick={() => setPagina('Home')}
              style={{
                padding: "14px 20px",
                border: "none",
                width: "100%",
              }}
            >Home</button>
          </div>
        )
      }

    </div>
  )
}

export default App
