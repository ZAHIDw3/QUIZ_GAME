import Swal from "sweetalert2"

const ListQuestion = ({
    pregunta,
    listQuestions,
    setListQuestions,
}) => {
    const { id, question, answer1, answer2, answer3, answerTrue } = pregunta;

    const deleteListQuestion = () => {
        const newList = listQuestions.filter(pregunta => pregunta.id !== id)
        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    const editListQuestion = async () => {
        const { value } = await Swal.fire({
            title: "Question Information",
            html: `
                <input 
                    type="text"
                    id="question" 
                    name="question" 
                    placeholder="Question"
                    class="swal2-input"
                    value="${question}"
                />
                <input 
                    type="text" 
                    id="answer1" 
                    name="answer1"
                    placeholder="Answer 1"
                    class="swal2-input"
                    value="${answer1}"
                />
                <input 
                    type="text" 
                    id="answer2" 
                    name="answer2"
                    placeholder="Answer 2"
                    class="swal2-input"
                    value="${answer2}"
                />
                <input 
                    type="text" 
                    id="answer3" 
                    name="answer3"
                    placeholder="Answer 3"
                    class="swal2-input"
                    value="${answer3}"
                />
                <select id="answerSelect" class="swal2-input">
                    <option value="">Select the correct answer</option>
                    <option value="answer1">Answer 1</option>
                    <option value="answer2">Answer 2</option>
                    <option value="answer3">Answer 3</option>
                </select>
            `,
            confirmButtonText: "Continue",
            showCancelButton: true,
            cancelButtonText: "Dismiss",
            focusConfirm: false,
            preConfirm: () => {
                const question = Swal.getPopup().querySelector("#question").value;
                const answer1 = Swal.getPopup().querySelector("#answer1").value;
                const answer2 = Swal.getPopup().querySelector("#answer2").value;
                const answer3 = Swal.getPopup().querySelector("#answer3").value;
                const selected = Swal.getPopup().querySelector("#answerSelect").value;

                if (!question || !answer1 || !answer2 || !answer3 || !selected) {
                    Swal.showValidationMessage("Please enter full information");
                }

                return { question, answer1, answer2, answer3, selected };
            },
        })

        
        if (!value.question || !value.answer1 || !value.answer2 || !value.answer3 || !value.selected) return;

        let trueAnswer;
        if (value.selected === 'answer1') {
            trueAnswer = value.answer1;
          }
        if (value.selected === 'answer2') {
            trueAnswer = value.answer2;
          }
          
        if (value.selected === 'answer3') {
            trueAnswer = value.answer3;
          }

        const newList= listQuestions.map((pregunta) => {
            if(pregunta.id === id){
                pregunta.question = value.question;
                pregunta.answer1 = value.answer1;
                pregunta.answer2 = value.answer2;
                pregunta.answer3 = value.answer3;
                pregunta.answerTrue = trueAnswer;
            }
            return pregunta;
        })

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    return (
        <div className="row text-center align-items-center mt-4">

            <div className="col">{question}</div>

            <div className="col-3 col-md-3">
                <strong>1.</strong> {answer1}<br />
                <strong>2.</strong> {answer2}<br />
                <strong>3.</strong> {answer3}
            </div>

            <div className="col-3 col-md-3">{answerTrue}</div>

            <div className="col-4 col-md-2 btn-group btn-group-sm" role="group">

                <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={editListQuestion}
                >
                    <i class="bi bi-pencil-square"></i>
                </button>

                <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={deleteListQuestion}
                >
                    <i class="bi bi-trash2-fill"></i>
                </button>

            </div>

        </div >
    )
}

export default ListQuestion