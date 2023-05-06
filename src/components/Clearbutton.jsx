import Swal from "sweetalert2"

const Clearbutton = ({setListQuestions}) => {

    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
        if (isConfirmed) {
            localStorage.setItem("listQuestions", JSON.stringify([]));
            setListQuestions([])
        }
    }

    return (
        <button
            className="btn btn-outline-danger me-1"
            onClick={clearList}
            type="button"
        >
            <i className="bi bi-trash2"></i>
        </button>
    )
}

export default Clearbutton