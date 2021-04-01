import { useState } from 'react';
import './PrioritisationTool.scss';
import RoiForm from '../../components/RoiForm';
import UsTile from '../../components/UsTile';
import noResultImage from '../../resources/assets/no-result.svg';
import PriorityProgressModal from '../../components/PriorityProgressModal';
import ConfirmationModal from '../../components/ConfirmationModal';
import JsonTOCSV from '../../utils/JsonToCSV';

function PrioritisationTool() {
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
    obj.dependency = formData.elements.dependency.value;
    // obj.remarks = formData.elements.remarks.value;
    obj.metrics = [...formData.elements.metrics].filter((item) => item.checked).map((item) => item.value);
    newItems.unshift(obj);
    setItems([...newItems]);
    formData.reset();
  }

  let usList = items.map((item) => <UsTile items={item} key={item.name}/>);
  const prioritize = () => {
    startModal();
    setTimeout(() => {
      const prioritizedItems = items.map((item) => {
        item.prio = ((+item.improvement * +item.impactedUsers * +item.frequency * +item.dependency * (item.metrics.length + 1)) / item.efforts).toFixed(1);
        return item;
      }).sort((a, b) => b.prio - a.prio);
      setItems([...prioritizedItems]);
    }, 2000);
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
    <div className="prioritisation-tool animate__animated animate__fadeIn">
      {showClearConfirmation && <ConfirmationModal modalInfo={deleteInfo} />}
      {showModal && <PriorityProgressModal totalItems={items.length} />}
      <div className="columns">
        <div className="roi-form-section column is-three-fifths">
          <RoiForm setObjectFunction={ setObject }/>
        </div>
        <div className="list column">
          <h4 className="title is-4 center">Prioritisation List</h4>
          { items.length === 0 && <div className="center">
            <img className="noresult-image" src={noResultImage} alt="No results"/>
            <p>There are no tasks added to prioritise yet. <br />Get started by adding a task.</p>
          </div> }
          {usList}
          {items.length > 0 && <div className="list-button">
            <button className="button is-primary" onClick={prioritize}>Prioritise</button>
            <div className="additional-buttons">
              <button className="button is-excel" onClick={() => JsonTOCSV(items)}>Export to Excel</button>
              <button className="button is-danger" onClick={() => setShowClearConfirmation(true)}>Clear all</button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default PrioritisationTool;
