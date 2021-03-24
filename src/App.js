import './App.scss';
import { useState } from 'react';
import RoiForm from './components/RoiForm';
import UsTile from './components/UsTile';
import noResultImage from '../src/assets/no-result.svg';
import PriorityProgressModal from './components/PriorityProgressModal';

function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const setObject = (event) => {
    event.preventDefault();
    const formData = event.target;
    const obj = {};
    obj.name = formData.elements.name.value;
    obj.improvement = formData.elements.improvement.value;
    obj.affectedUsers = formData.elements.affectedUsers.value;
    obj.frequency = formData.elements.frequency.value;
    obj.storyPoints = formData.elements.storyPoints.value;
    obj.metrics = [...formData.elements.metrics].filter((item) => item.checked).map((item) => item.value);
    console.log(obj)
    setItems([...items,obj]);
  }

  let usList = items.map((item) => <UsTile items={item} />);
  const prioritize = () => {
    startModal();
    const prioritizedItems = items.map((item) => {
      item.prio = ((+item.improvement * +item.affectedUsers * +item.frequency * (item.metrics.length + 1)) / item.storyPoints).toFixed(1);
      return item;
    }).sort((a, b) => b.prio - a.prio);
    setItems([...prioritizedItems]);
  }

  const startModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 4000);
  }

  return (
    <div className="App">
      {showModal && <PriorityProgressModal totalItems={items.length} />}
      <div className="columns is-vcentered">
        <div className="roi-form column is-three-fifths">
          <RoiForm setObjectFunction={ setObject }/>
        </div>
        <div className="list column">
          <h4 className="title is-4 center">US or Epics to prioritise</h4>
          { items.length === 0 && <div className="center">
            <img className="noresult-image" src={noResultImage} />
            <p>There are no US or epics added to prioritise yet. Add a user story or epic by filling the Logging form.</p>
          </div> }
          {usList}
          {items.length > 0 && <button className="button list-button is-primary" onClick={prioritize}>Prioritise</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
