import './UsTile.scss'
import formEntries from '../resources/data/FormEntries';
function UsTile(props) {
  const formula = new formEntries();
  let metrics = props.items.metrics.map((item, index) => {
    return <span key={index} className="tag is-light">{item}</span>
  })
  return (
    <div className="card animate__animated animate__slideInLeft">
      <header className="card-header">
        <p className="card-header-title">
          {props.items.name}
        </p>
        {props.items.prio && <div className="value-score center">
          <p>VALUE SCORE</p>
          <h4 className="title is-4">{props.items.prio}</h4>
        </div>}
      </header>
      <div className="card-content">
        <div className="content">
          Impacts <b>{formula.impactedUsers[props.items.impactedUsers]} </b>
           of users at a <b>{formula.frequency[props.items.frequency]} </b>
          frequency and has a scope of <b>
            {formula.improvement[props.items.improvement]} </b>improvement.
            It has <b>{formula.dependency[props.items.dependency]} </b> on other teams.
          {props.items.metrics.length > 0 && <p>KPI - {metrics} </p>}
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item" onClick={() => props.remove(props.index)}>Remove task</p>
      </footer>
    </div>)
}

export default UsTile;
