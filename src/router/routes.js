import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrioritisationTool from '../pages/PrioritisationTool/PrioritisationTool';

function Routes(){
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/">
            <PrioritisationTool />
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Routes;