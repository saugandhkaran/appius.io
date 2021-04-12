import FormEntries from '../resources/data/FormEntries';
function TableViewList(props) {
  const formEntries = new FormEntries;
  const tableValues = props.itemList.map((item, index) => {
    const metrics = item.metrics.map((metric, index) => <span key={index} className="tag is-info is-light">{metric}</span>)
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{item.name}</td>
        <td>{formEntries.impactedUsers[item.impactedUsers]}</td>
        <td>{formEntries.frequency[item.frequency]}</td>
        <td>{formEntries.improvement[item.improvement]}</td>
        <td>{formEntries.effort[item.efforts]}</td>
        <td>{formEntries.dependency[item.dependency]}</td>
        <td>{metrics}</td>
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