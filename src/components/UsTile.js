function UsTile(props) {
  const formula = {
    impactedUsers: {
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
      '6': '100%',
      '5': '80% - 99%',
      '4': '50% - 79%',
      '3': '20% - 49%',
      '2': '10 - 19%',
      '1': 'Less than 10%'
    },
    effort: {
      '60': 'XXL',
      '50': 'XL',
      '40': 'L',
      '30': 'M',
      '20': 'S',
      '10': 'XS'
    },
    dependency: {
      '1': 'High',
      '2': 'Medium',
      '3': 'Low',
      '4': 'No dependency'
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
          Impacts <b>{formula.impactedUsers[props.items.impactedUsers]} </b>
           of users at a <b>{formula.frequency[props.items.frequency]} </b> 
          frequency and has the scope of improvement upto <b>
            {formula.improvement[props.items.improvement]} </b>
            It has <b>{formula.dependency[props.items.dependency]} </b>dependency on other teams.
          {props.items.metrics.length > 0 && <p>KPI - {metrics} </p>}
      </div>
    </div>
  </div>)
}

export default UsTile;
