import './App.scss';
import './animation.css';
import { useState } from 'react';
import RoiForm from './components/RoiForm';
import UsTile from './components/UsTile';
import noResultImage from '../src/assets/no-result.svg';
import PriorityProgressModal from './components/PriorityProgressModal';
import ConfirmationModal from './components/ConfirmationModal';
import JsonTOCSV from './components/JsonToCSV';

function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const setObject = (event) => {
    event.preventDefault();
    const formData = event.target;
    const obj = {};
    let newItems = items;
    obj.name = formData.elements.name.value;
    obj.improvement = formData.elements.improvement.value;
    obj.impactedUsers = formData.elements.impactedUsers.value;
    obj.frequency = formData.elements.frequency.value;
    obj.efforts = formData.elements.efforts.value;
    // obj.remarks = formData.elements.remarks.value;
    obj.metrics = [...formData.elements.metrics].filter((item) => item.checked).map((item) => item.value);
    newItems.unshift(obj);
    setItems([...newItems]);
    formData.reset();
  }

  let usList = items.map((item) => <UsTile items={item} key={item.name}/>);
  const prioritize = () => {
    startModal();
    const prioritizedItems = items.map((item) => {
      item.prio = ((+item.improvement * +item.impactedUsers * +item.frequency * (item.metrics.length + 1)) / item.efforts).toFixed(1);
      return item;
    }).sort((a, b) => b.prio - a.prio);
    setItems([...prioritizedItems]);
  }

  const clearAllItems = () => {
    setItems([]);
    setShowClearConfirmation(false);
  }

  const deleteInfo = {
      type: 'clear',
      typeAction: clearAllItems,
      title: 'Are you sure you want to clear the list?',
      description: 'Once deleted, you will lose the tasks along with the value score.',
      closeModal: () => setShowClearConfirmation(false)
  }

  const startModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }

  return (
    <div className="App animate__animated animate__fadeIn">
      {showClearConfirmation && <ConfirmationModal modalInfo={deleteInfo} />}
      {showModal && <PriorityProgressModal totalItems={items.length} />}
      <div className="columns">
        <div className="roi-form-section column is-three-fifths">
          <RoiForm setObjectFunction={ setObject }/>
        </div>
        <div className="list column">
          <h4 className="title is-4 center">Prioritisation List</h4>
          { items.length === 0 && <div className="center">
            <img className="noresult-image" src={noResultImage} />
            <p>There are no US or epics added to prioritise yet. Add a user story or epic by filling the Logging form.</p>
          </div> }
          {usList}
          {items.length > 0 && <div className="list-button">
            <button className="button is-excel" onClick={() => JsonTOCSV(items)}>Export to Excel</button>
            <button className="button is-primary" onClick={prioritize}>Prioritise</button>
            <button className="button is-danger" onClick={() => setShowClearConfirmation(true)}>Clear all</button>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
