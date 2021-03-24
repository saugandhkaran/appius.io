import calculating from '../assets/calculating.svg';
import arranging from '../assets/arranging.svg';
import scanning from '../assets/scanning.svg';

function PriorityProgressModal(props) {
  let images = [scanning, calculating, arranging];
  return (
    <div className="modal is-active">
    <div className="modal-background"></div>
      <div className="modal-content center">
        <div className="columns">
          {/* <div className="column"><img className="progress-images" src={images[0]} /><p className="center">Scanning your stories and epics</p></div> */}
          <div className="column"><img className="progress-images" src={images[1]} /><p className="center">Calculating priority</p></div>
          {/* <div className="column"><img className="progress-images" src={images[2]} /><p className="center">Rearranging stories and epics</p></div> */}
        </div>
        <progress className="progress is-small is-info" max="100"></progress>
      </div>
    <button className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}

export default PriorityProgressModal;