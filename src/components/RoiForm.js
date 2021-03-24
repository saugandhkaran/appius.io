function RoiForm(props) {
  return (
    <form onSubmit={props.setObjectFunction}>
      <h4 className="title is-4 center">Logging form</h4>
      <div className="field">
        <label className="label">US or Epic</label>
        <div className="control">
          <input name="name" required className="input" type="text" placeholder="US or Epic" />
        </div>
      </div>
      <div className="columns">
        <div className="field column">
          <label className="label">Improvement</label>
          <div className="control">
            <div className="select">
              <select name="improvement">
                <option value="5">10x or more</option>
                <option value="4">2x or more</option>
                <option value="3">1x - 2x</option>
                <option value="2">No change</option>
                <option value="1">Less than 1x</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field column">
          <label className="label">Affected users</label>
          <div className="control">
            <div className="select">
              <select name="affectedUsers">
                <option value="6">100%</option>
                <option value="5">80% - 99%</option>
                <option value="4">50% - 79%</option>
                <option value="3">20% - 49%</option>
                <option value="2">10 - 19%</option>
                <option value="1">Less than 10%</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field column">
          <label className="label">Frequency</label>
          <div className="control">
            <div className="select">
              <select name="frequency">
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
        <div className="field column">
          <label className="label">Story Points</label>
          <div className="control">
            <div className="select">
              <select name="storyPoints">
                <option value="10">0.5</option>
                <option value="20">1</option>
                <option value="30">2</option>
                <option value="40">3</option>
                <option value="50">5</option>
                <option value="60">8</option>
                <option value="70">13</option>
                <option value="80">21</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Metrics it solves</label>
        <div className="columns">
          <label className="checkbox column">
            <input type="checkbox" value="activation" name="metrics"/>
            Activation
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="retention" name="metrics"/>
            Retention
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="error solve" name="metrics"/>
            Error solve
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="onboarding" name="metrics"/>
            Onboarding
          </label>
        </div>
      </div>
      <div className="field column center">
        <button className="button is-primary" type="submit">Add for prioritisation</button>
      </div>
    </form>
  )
}

export default RoiForm;