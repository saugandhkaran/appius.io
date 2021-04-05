import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrioritisationTool from '../pages/PrioritisationTool/PrioritisationTool';
import Home from '../pages/Home/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/prioritytool">
          <PrioritisationTool />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;