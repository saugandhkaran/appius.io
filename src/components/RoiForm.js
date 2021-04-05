import FormEntries from '../resources/data/FormEntries';
function RoiForm(props) {
  const formEntries = new FormEntries();
  const improvementOptions = Object.keys(formEntries.improvement).map((item) => {
    return (
      <option value={item} key={item}>{formEntries.improvement[item]}</option>
    )
  });
  const impactedUsersOptions = Object.keys(formEntries.impactedUsers).map((item) => {
    return (
      <option value={item} key={item}>{formEntries.impactedUsers[item]}</option>
    )
  });
  const frequencyOptions = Object.keys(formEntries.frequency).map((item) => {
    return (
      <option value={item} key={item}>{formEntries.frequency[item]}</option>
    )
  });
  const effortOptions = Object.keys(formEntries.effort).map((item) => {
    return (
      <option value={item} key={item}>{formEntries.effort[item]}</option>
    )
  });
  const dependencyOptions = Object.keys(formEntries.dependency).map((item) => {
    return (
      <option value={item} key={item}>{formEntries.dependency[item]}</option>
    )
  });

  return (
    <div>
      <h4 className="title is-4 center roi-header">Prioritisation Tool</h4>
      <form className="roi-form" onSubmit={props.setObjectFunction}>
        <div className="field">
          <div className="control">
            <input name="name" required className="input" type="text" placeholder="Type task here*" />
          </div>
        </div>
        <div className="columns">
          <div className="field column">
            <label className="label">Customer Value
            <span className="info"
                type="tooltip"
                data-description="This can be defined as the perceived value by the customer when modifying or creating this
                 feature. Think about how much is this task is going to ease the journey of the customer.">i</span></label>
            <div className="control">
              <div className="select">
                <select required name="improvement">
                  <option value="">Select</option>
                  {improvementOptions}
                </select>
              </div>
            </div>
          </div>
          <div className="field column">
            <label className="label">Impacted users
            <span className="info"
                type="tooltip"
                data-description="Focus on positive impact. How much percentage of your existing users will be positively impacted
                 after implementing this task?">i</span></label>
            <div className="control">
              <div className="select">
                <select required name="impactedUsers">
                  <option value="">Select</option>
                  {impactedUsersOptions}
                </select>
              </div>
            </div>
          </div>
          <div className="field column">
            <label className="label">Frequency of use case
            <span className="info"
                type="tooltip"
                data-description="How often does the customer experience the issue that is solved by the task?">i</span></label>
            <div className="control">
              <div className="select">
                <select required name="frequency">
                  <option value="">Select</option>
                  {frequencyOptions}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="field column">
            <label className="label">Effort
            <span className="info"
                type="tooltip"
                data-description="What is the effort needed to complete the task?
                XXL being the highest and XS being the lowest.">i</span></label>
            <div className="control">
              <div className="select">
                <select required name="efforts">
                  <option value="">Select</option>
                  {effortOptions}
                </select>
              </div>
            </div>
          </div>
          <div className="field column">
            <label className="label">Dependency
              <span className="info"
                type="tooltip"
                data-description="Are there any dependencies on other teams to complete this task?">i</span>
            </label>
            <div className="control">
              <div className="select">
                <select required name="dependency">
                  <option value="">Select</option>
                  {dependencyOptions}
                </select>
              </div>
            </div>
          </div>

          {/* <div className="field column">
          <label className="label">Extra info</label>
          <div className="control">
            <input name="remarks" className="input" type="text" placeholder="Extra info" />
          </div>
        </div> */}
        </div>
        <div className="field">
          <label className="label">KPI Section
          <span className="info"
              type="tooltip"
              data-description="Which KPIs does completion of this task help you in? Multiple KPIs can be selected.">i</span></label>
          <div className="columns">
            <label className="checkbox column">
              <input type="checkbox" value="Acquisition" name="metrics" />
            Acquisition
          </label>
            <label className="checkbox column">
              <input type="checkbox" value="Onboarding" name="metrics" />
            Onboarding
          </label>
            <label className="checkbox column">
              <input type="checkbox" value="Activation" name="metrics" />
            Activation
          </label>
            <label className="checkbox column">
              <input type="checkbox" value="Retention" name="metrics" />
            Retention
          </label>
          </div>
        </div>
        <div className="field column center">
          <button className="button is-primary" type="submit">Add for prioritisation</button>
        </div>
      </form>
      <br /><br />
      <p>Help the customer win by sending your feedback: <a href="mailto: titlesboreme@gmail.com">Send Feedback</a></p>
    </div>
  )
}

export default RoiForm;