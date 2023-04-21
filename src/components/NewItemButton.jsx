import Swal from "sweetalert2"

const NewItemButton = () => {
    const newItemModal = () => {
        Swal.fire('Silksong se acerca')
    }
    return(
        <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-plus-circle"></i>
        </button>
    )
}

export default NewItemButton