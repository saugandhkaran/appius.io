function RoiForm(props) {
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
                data-description="Customer value can be defined as the value that is added to the customer by modifiying 
                an existing functionality or creating a new functionality. It can be defined as how much is the task going to ease the
                 journey of a customer.">i</span></label>
          <div className="control">
            <div className="select">
                <select required name="improvement">
                <option value="">Select</option>
                <option value="1">Less than 10%</option>
                <option value="2">10 - 19%</option>
                <option value="3">20% - 49%</option>
                <option value="4">50% - 79%</option>
                <option value="5">80% - 99%</option>
                <option value="6">100%</option>
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
                <option value="1">Less than 10%</option>
                <option value="2">10 - 19%</option>
                <option value="3">20% - 49%</option>
                <option value="4">50% - 79%</option>
                <option value="5">80% - 99%</option>
                <option value="6">100%</option>
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
                <option value="6">Daily</option>
                <option value="5">Few times a week</option>
                <option value="4">Weekly</option>
                <option value="3">Monthly</option>
                <option value="2">Few times a year</option>
                <option value="1">Once a year or less</option>
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
                <option value="10">XS</option>
                <option value="20">S</option>
                <option value="30">M</option>
                <option value="40">L</option>
                <option value="50">XL</option>
                <option value="60">XXL</option>
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
                  <option value="3">Low (Dependent on &#60;= 1 )</option>
                  <option value="2">Medium (Dependent on 2 - 3)</option>
                  <option value="1">High (Dependent on &#62;3 teams)</option>
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
                data-description="Which KPIs is it completion of this task help you in? Multiple KPIs can be selected.">i</span></label>
        <div className="columns">
          <label className="checkbox column">
            <input type="checkbox" value="Acquisition" name="metrics"/>
            Acquisition
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="Onboarding" name="metrics"/>
            Onboarding
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="Activation" name="metrics"/>
            Activation
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="Retention" name="metrics"/>
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