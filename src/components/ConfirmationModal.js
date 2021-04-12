function ConfirmationModal(props) {
  return (
    <div className="modal animate__animated animate__fadeIn is-active confirmation-modal">
      <div className="modal-background"></div>
      <div className="modal-content center">
        <p className="title is-4">{props.modalInfo.title}</p>
        {props.modalInfo.description}
      </div>
      <div className="modal-footer">
        <button className="button" onClick={props.modalInfo.closeModal}>Close</button>
        {props.modalInfo.type === 'clear' && <button onClick={props.modalInfo.typeAction} className="button is-danger">Clear</button>}
      </div>
      <button className="modal-close is-large" onClick={props.modalInfo.closeModal} aria-label="close"></button>
    </div>
  )
}

export default ConfirmationModal;