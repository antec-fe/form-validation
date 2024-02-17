function Modal (props) {
    return (
        <dialog open={props.isOpen}>
            <h3>
                { props.text }
            </h3>
            {/* <button onClick={props.close}>
                Bağla
            </button> */}
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default Modal