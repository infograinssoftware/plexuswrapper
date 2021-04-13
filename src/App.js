import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch, BrowserRouter } from "react-router-dom";
import Plexuswrapper from "../src/view/plexuswrapper/index";

function App() {
  return (
    <div className="App bg_Style">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/plexuswrapper" component={Plexuswrapper} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
