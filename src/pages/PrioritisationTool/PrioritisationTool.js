import { useState } from 'react';
import './PrioritisationTool.scss';
import RoiForm from '../../components/RoiForm';
import UsTile from '../../components/UsTile';
import noResultImage from '../../resources/assets/no-result.svg';
import ConfirmationModal from '../../components/ConfirmationModal';
import JsonTOCSV from '../../utils/JsonToCSV';
import TheHeader from '../../components/TheHeader';
import TableViewList from '../../components/TableViewList';

function PrioritisationTool() {
  const [items, setItems] = useState([]);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [showTableView, setShowTableView] = useState(false);
  const obj = {
    metrics: []
  };

  const setObject = (event) => {
    event.preventDefault();
    const formData = event.target;
    obj[formData.name] = formData.value;
  }

  const submitForm = (event) => {
    const formData = event.target;
    obj.metrics = [...formData.metrics].filter((item) => item.checked).map((item) => item.value);
    const newItems = items;
    newItems.unshift(obj);
    setItems([...newItems]);
    prioritize(obj);
    event.target.reset();
  }

  const removeTask = (index) => {
    items.splice(index, 1);
    setItems([...items]);
  }

  let usList = items.map((item, index) => <UsTile items={item} key={index} index={index} remove={removeTask}/>);

  const prioritize = (item) => {
    item.prio = ((+item.improvement * +item.impactedUsers * +item.frequency * +item.dependency * (item.metrics.length + 1)) / item.efforts).toFixed(1);
  }

  const clearAllItems = () => {
    setItems([]);
    setShowClearConfirmation(false);
  }

  const deleteInfo = {
    type: 'clear',
    typeAction: clearAllItems,
    title: 'Are you sure you want to clear the list?',
    description: <p>Once deleted, you will lose the tasks along with the value score.</p>,
    closeModal: () => setShowClearConfirmation(false)
  }

  const tableDataInfo = {
    type: 'show',
    typeAction: clearAllItems,
    title: 'Table View',
    description: <TableViewList itemList={items} />,
    closeModal: () => setShowTableView(false)
  }

  const sortItems = (event) => {
    if (event.target.value) {
      let sortedItems = items.sort((a,b) => b[event.target.value] - a[event.target.value]);
      setItems([...sortedItems]);
    }
  }

  return (
    <div>
      <TheHeader />
      <div className="prioritisation-tool animate__animated animate__fadeIn">
        {showClearConfirmation && <ConfirmationModal modalInfo={deleteInfo} />}
        {showTableView && <ConfirmationModal modalInfo={tableDataInfo} />}
        <div className="columns">
          <div className="roi-form-section column is-three-fifths">
            <RoiForm setObjectFunction={setObject} submitFormFunction={submitForm}/>
          </div>
          <div className="list column">
            <h4 className="title is-4 center">List of tasks</h4>
            {items.length === 0 && <div className="center">
              <img className="noresult-image" src={noResultImage} alt="No results" />
              <p>There are no tasks added to prioritise yet. <br />Get started by adding a task.</p>
            </div>}
            {items.length > 1 && <div className="sort-options">
              <div className="additional-buttons">
                <p>Sort tasks by </p>
                <div className="select is-small">
                  <select onChange={sortItems}>
                    <option value="">---</option>
                    {/* <option value="name">Name ???</option> */}
                    <option value="prio">Value Score ???</option>
                    <option value="improvement">Added Value ???</option>
                    <option value="impactedUsers">Affected Users ???</option>
                    <option value="dependency">Dependency ???</option>
                    <option value="efforts">Efforts ???</option>
                    <option value="frequency">Frequency ???</option>
                  </select>
                </div>
              </div>
            </div>}
            {usList}
            {items.length > 0 && <div className="list-button">
              {/* <button className="button is-primary" onClick={prioritize}>Prioritise</button> */}
              <div className="additional-buttons">
                <button className="button is-excel" onClick={() => JsonTOCSV(items)}>Export to Excel</button>
                <button className="button is-primary" onClick={() => setShowTableView(true)}>Table view</button>
                <button className="button is-danger" onClick={() => setShowClearConfirmation(true)}>Clear all</button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrioritisationTool;
