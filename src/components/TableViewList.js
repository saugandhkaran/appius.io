import FormEntries from '../resources/data/FormEntries';
function TableViewList(props) {
  const formEntries = new FormEntries;
  const tableValues = props.itemList.map((item, index) => {
    const metrics = item.metrics.map((metric, index) => <span key={index} className="tag is-info is-light">{metric}</span>)
    return (
      <tr>
        <th>{index + 1}</th>
        <th>{item.name}</th>
        <th>{formEntries.impactedUsers[item.impactedUsers]}</th>
        <th>{formEntries.frequency[item.frequency]}</th>
        <th>{formEntries.improvement[item.improvement]}</th>
        <th>{formEntries.effort[item.efforts]}</th>
        <th>{formEntries.dependency[item.dependency]}</th>
        <th>{metrics}</th>
        <th className="tag is-primary is-light is-large">{item.prio}</th>
      </tr>
    )
  })
  return (
    <div className="table-container">
    <table className="table is-hoverable">
      <thead>
        <tr>
          <th>Sl no</th>
          <th>Task</th>
          <th>Added Value</th>
          <th>Frequency</th>
          <th>Improvement</th>
          <th>Efforts</th>
          <th>Dependency</th>
          <th>KPIs</th>
          <th>Value Score</th>
        </tr>
      </thead>
      <tbody>
        {tableValues}
      </tbody>
    </table>
    </div>
  )
}

export default TableViewList;