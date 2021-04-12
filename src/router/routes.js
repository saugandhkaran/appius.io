import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrioritisationTool from '../pages/PrioritisationTool/PrioritisationTool';
import Home from '../pages/Home/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/prioritytool">
          <PrioritisationTool />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;