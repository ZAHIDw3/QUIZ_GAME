import { useState } from "react";
import HomePagina from "./components/HomePagina";
function App() {
  const [pagina, setPagina] = useState('Home')
  console.log(pagina)
  return (
    <div className="container mt-2">

      {
        pagina === 'Home' && (
          <div>
            <HomePagina
              setPagina={setPagina} />
          </div>
        )
      }
      {
        pagina === 'Capture' && (
          <div>
            <h1>Capture</h1>
            <button
              type="button"
              class="btn btn-warning"
              onClick={()=>setPagina('Home')}
              style={{
                padding: "14px 20px",
                border: "none",
                width: "100%",
              }}
            >Home</button>
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
              onClick={()=>setPagina('Home')}
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
