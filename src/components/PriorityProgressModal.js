import calculating from '../resources/assets/calculating.svg';

function PriorityProgressModal(props) {
  return (
    <div className="modal animate__animated animate__fadeIn is-active">
    <div className="modal-background"></div>
      <div className="modal-content center">
        <div className="columns">
          <div className="column"><img className="progress-images" alt="Calculating" src={calculating} /><p className="center">Calculating priority</p></div>
        </div>
        <progress className="progress is-small is-info" max="100"></progress>
      </div>
    <button className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}

export default PriorityProgressModal;