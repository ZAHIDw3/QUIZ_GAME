import './Game.css'

const FinalPagina = ({ setPagina, listQuestions, puntuacion, setPuntuacion }) => {

    return (
        <div className='game-container my-component'>

            <main className="app">
                <div className='juego-terminado'>
                    <span>
                        {" "}
                        You got {puntuacion} hits out of {listQuestions.length}{" "}
                    </span>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPagina('Game'); setPuntuacion(0); }}
                    >
                        Play again
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPagina('Answers'); setPuntuacion(0); }}
                    >
                        See Answers
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPagina('Home'); setPuntuacion(0); }}
                    >
                        Home
                    </button>

                </div>
            </main>

        </div>
    )
}

export default FinalPagina