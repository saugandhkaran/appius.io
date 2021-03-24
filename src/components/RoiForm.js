function RoiForm(props) {
  return (
    <form onSubmit={props.setObjectFunction}>
      <h4 className="title is-4 center">Backlog prioritisation tool for Product Owners</h4>
      <div className="field">
        <label className="label">Epic / US / Bug / Spike</label>
        <div className="control">
          <input name="name" required className="input" type="text" placeholder="Epic / US / Bug / Spike" />
        </div>
      </div>
      <div className="columns">
        <div className="field column">
          <label className="label">Impact</label>
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
          <label className="label">% of affected users</label>
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
          <label className="label">Frequency of use case</label>
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
          <label className="label">Effort (Story Points)</label>
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
        <label className="label">Phases of Customer Journey</label>
        <div className="columns">
          <label className="checkbox column">
            <input type="checkbox" value="activation" name="metrics"/>
            Acquisition
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="retention" name="metrics"/>
            Onboarding
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="error solve" name="metrics"/>
            Activation
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="onboarding" name="metrics"/>
            Retention
          </label>
          <label className="checkbox column">
            <input type="checkbox" value="upgrading" name="metrics"/>
            Upgrading
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