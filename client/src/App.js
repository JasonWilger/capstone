import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Login from './views/login';
import Dock from './views/dock';
import YourList from './views/yourList';

// components
import Item from './components/item.component';


function App() {

  return (
    <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dock" component={Dock} />
            <Route exact path="/yourList" component={YourList} />
            <Route exact path="/items/:id" component={Item} />
            <Route path="*">
              <Redirect to='/' />
            </Route>
          </Switch>
          </main>
    </Router>
  );

}

export default App;
