import Clearbutton from "./Clearbutton";
import HomeButton from "./HomeButton";
import ListQuestion from "./ListQuestion";
import NewButton from "./NewButton";

const CapturePagina = ({
    setPagina,
    listQuestions,
    setListQuestions,
}) => {

    return (
        <div className="container">

            <div className="row">
                <div className="col text-start">
                    <h1>Capture</h1>
                </div>
                <div className="col text-end mt-1">
                    <Clearbutton
                        setListQuestions={setListQuestions}
                    />
                    <NewButton
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                    <HomeButton
                        setPagina={setPagina}
                    />
                </div>
            </div>

            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>Your list is empty</h3>
                        Add a new question to get started.
                    </div>
                )
            }
            {
                listQuestions.map((pregunta) => (
                    <ListQuestion
                        pregunta={pregunta}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                ))
            }


            <hr />

            <div className="col text-end">
                <Clearbutton
                    setListQuestions={setListQuestions}
                />
                <NewButton
                    listQuestions={listQuestions}
                    setListQuestions={setListQuestions}
                />
                <HomeButton
                    setPagina={setPagina}
                />
            </div>

        </div>
    )
}

export default CapturePagina