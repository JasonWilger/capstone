import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Dock from './views/dock';
import Analytics from './views/analytics';
import Login from './views/login';


function App() {

  return (
    <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Dock} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/login" component={Login} />
            <Route path="*">
              <Redirect to='/' />
            </Route>
          </Switch>
          </main>
    </Router>
  );

}

export default App;
