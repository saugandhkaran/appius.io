import './RoiForm.scss';
import { useState } from 'react';
import FormEntries from '../resources/data/FormEntries';
function RoiForm(props) {
  const [counter, setCounter] = useState(0);
  const formEntries = new FormEntries();
  const previous = () => {
    setCounter(counter - 1);
  }
  const handleChange = (event) => {
    if (event.target.name === 'name') {
      props.setObjectFunction(event);
      return;
    }
    if (event.target.name !== 'metrics') {
      props.setObjectFunction(event);
      setCounter(counter + 1);
    }
  }
  const improvementOptions = Object.keys(formEntries.improvement).map((item, index) => {
    return (
      <label className="radio column">
        <input required onChange={handleChange} value={item} name="improvement" type="radio" key={index} />{formEntries.improvement[item]}
      </label>
    )
  });
  const impactedUsersOptions = Object.keys(formEntries.impactedUsers).map((item, index) => {
    return (
      <label className="radio column">
        <input required onChange={handleChange} value={item} name="impactedUsers" type="radio" key={index} />{formEntries.impactedUsers[item]}
      </label>
    )
  });
  const frequencyOptions = Object.keys(formEntries.frequency).map((item, index) => {
    return (
      <label className="radio column">
        <input required onChange={handleChange} value={item} name="frequency" type="radio" key={index} />{formEntries.frequency[item]}
      </label>
    )
  });
  const effortOptions = Object.keys(formEntries.effort).map((item, index) => {
    return (
      <label className="radio column">
        <input required onChange={handleChange} value={item} name="efforts" type="radio" key={index} />{formEntries.effort[item]}
      </label>
    )
  });
  const dependencyOptions = Object.keys(formEntries.dependency).map((item, index) => {
    return (
      <label className="radio column">
        <input required onChange={handleChange} value={item} name="dependency" type="radio" key={index} />{formEntries.dependency[item]}
      </label>
    )
  });
  const submitThyForm = (event) => {
    event.preventDefault();
    setCounter(0);
    props.submitFormFunction(event);
  }

  return (
    <div className="column">
      <h4 className="title is-4 center roi-header">Prioritisation Tool</h4>
      <form className="roi-form" onSubmit={submitThyForm}>
        <div className="field">
          <div className="control">
            <h4 className="title is-4">Task</h4>
            <p className="title-description">Add a task and answer the questions below so as to help us calculate the value score of the task for you.</p>
            <input onChange={handleChange} name="name" required className="input" type="text" placeholder="Type task here*" />
          </div>
        </div>
        <div className="field custom-field">
          <progress className="progress" value={counter * 20} max="100"></progress>
          {counter === 0 && <div className="animate__animated animate__fadeIn">
            <div className="flex"><h4 className="label title is-4">Added Value</h4><p>Question {counter + 1}/6</p></div>
            <p className="field-description">This can be defined as the perceived value by the user when modifying or creating this
                 feature. Think about how much is this task is going to ease the journey or enhance the way of working.</p>
            <div className="control">
              <div className="radio">
                {improvementOptions}
              </div>
            </div>
          </div>}
          {counter === 1 && <div className="animate__animated animate__fadeIn">
            <div className="flex"><h4 className="label title is-4">Impacted Users</h4><p>Question {counter + 1}/6</p></div>
            <p className="field-description">Focus on positive impact. How much percentage of your existing users will be positively impacted after implementing this task?</p>
            <div className="control">
              <div className="radio">
                {impactedUsersOptions}
              </div>
            </div>
          </div>}
          {counter === 2 && <div className="animate__animated animate__fadeIn">
            <div className="flex"><h4 className="label title is-4">Frequency of use case</h4><p>Question {counter + 1}/6</p></div>
            <p className="field-description">How often does the user experience the issue that is solved by the task?</p>
            <div className="control">
              <div className="radio">
                {frequencyOptions}
              </div>
            </div>
          </div>}
          {counter === 3 && <div className="animate__animated animate__fadeIn">
            <div className="flex"><h4 className="label title is-4">Effort</h4><p>Question {counter + 1}/6</p></div>
            <p className="field-description">What is the effort needed to complete the task?
                XXL being the highest and XS being the lowest.</p>
            <div className="control">
              <div className="radio">
                {effortOptions}
              </div>
            </div>
          </div>}
          {counter === 4 && <div className="animate__animated animate__fadeIn">
            <div className="flex"><h4 className="label title is-4">Dependency</h4><p>Question {counter + 1}/6</p></div>
            <p className="field-description">Are there any dependencies on other teams to complete this task?</p>
            <div className="control">
              <div className="radio">
                {dependencyOptions}
              </div>
            </div>
          </div>}

          {/* <div className="field column">
          <label className="label">Extra info</label>
          <div className="control">
            <input name="remarks" className="input" type="text" placeholder="Extra info" />
          </div>
        </div> */}
          {counter === 5 && <div className="animate__animated animate__fadeIn">
            <div className="flex"><h4 className="label title is-4">KPI section</h4><p>Question {counter + 1}/6</p></div>
            <p className="field-description">Which KPIs does completion of this task influence? Multiple KPIs can be selected.</p>
            <div className="columns">
              <label className="checkbox column">
                <input onChange={handleChange} type="checkbox" value="Acquisition" name="metrics" />
                  Acquisition
              </label>
              <label className="checkbox column">
                <input onChange={handleChange} type="checkbox" value="Onboarding" name="metrics" />
                Onboarding
              </label>
              <label className="checkbox column">
                <input onChange={handleChange} type="checkbox" value="Activation" name="metrics" />
                Activation
              </label>
              <label className="checkbox column">
                <input onChange={handleChange} type="checkbox" value="Retention" name="metrics" />
                Retention
              </label>
              <label className="checkbox column">
                <input onChange={handleChange} type="checkbox" value="IT4IT" name="metrics" />
                IT4IT
              </label>
            </div>
          </div>}
        </div>
        <div className="field form-control-buttons">
          {counter > 0 && <button className="button is-primary" onClick={previous} type="button">Previous</button>}
          {counter === 5 && <button className="button is-info" type="submit">Prioritise</button>}
        </div>
      </form>
      <br /><br />
      <p>Help the customer win by sending your feedback: <a href="mailto: titlesboreme@gmail.com">Send Feedback</a></p>
    </div>
  )
}

export default RoiForm;