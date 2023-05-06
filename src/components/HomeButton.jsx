const HomeButton = ({setPagina}) => {
    return (
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setPagina('Home')}
            >
                <i className="bi bi-house"></i>
            </button>
    )
}

export default HomeButton