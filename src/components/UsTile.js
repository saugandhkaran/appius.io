function UsTile(props) {
  const formula = {
    affectedUsers: {
      '6': '100%',
      '5': '80% - 99%',
      '4': '50% - 79%',
      '3': '20% - 49%',
      '2': '10 - 19%',
      '1': 'Less than 10%'
    },
    frequency: {
      '6': 'Daily',
      '5': 'Few times a week',
      '4': 'Weekly',
      '3': 'Monthly',
      '2': 'Few times a year',
      '1': 'Once a year or less'
    },
    improvement: {
      '5': '10x or more',
      '4': '2x or more',
      '3': '1x - 2x',
      '2': 'No change',
      '1': 'Less than 1x'
    }
  }
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
          Affects <b>{formula.affectedUsers[props.items.affectedUsers]} </b>
           of users at a <b>{formula.frequency[props.items.frequency]} </b> 
          frequency and has the scope of impact upto <b>
            {formula.improvement[props.items.improvement]} </b>.
          {props.items.metrics.length > 0 && <p>KPI - {metrics} </p>}
          {props.items.remarks && <p>Extra info - {props.items.remarks} </p>}
      </div>
    </div>
  </div>)
}

export default UsTile;
