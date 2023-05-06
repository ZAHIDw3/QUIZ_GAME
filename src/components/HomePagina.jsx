
const HomePagina = ({ setPagina }) => {

    return (
        <div>
            <h1
                style={{
                    textAlign: "center"
                }}
            >Quiz Game</h1>

            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPagina('Capture')}
                style={{
                    padding: "14px 20px",
                    border: "none",
                    width: "100%",
                    margin: "50px 0px",
                }}
            >Capture</button>

            <button
                type="button"
                className="btn btn-info"
                onClick={() => setPagina('Game')}
                style={{
                    padding: "14px 20px",
                    border: "none",
                    width: "100%",
                }}
            >Game</button>
        </div>
    )
}

export default HomePagina