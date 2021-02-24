import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Login from './views/login';
import Dock from './views/dock';
import Analytics from './views/analytics';


function App() {

  return (
    <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dock" component={Dock} />
            <Route exact path="/analytics" component={Analytics} />
            <Route path="*">
              <Redirect to='/' />
            </Route>
          </Switch>
          </main>
    </Router>
  );

}

export default App;
