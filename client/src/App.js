import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Dock from './views/dock';
import Analytics from './views/analytics';
import Login from './views/login';

// components
import NavBar from './components/navbar';
import Footer from './components/footer';
import Quick from './components/quick';



function App() {

  return (
    <Router>
      <NavBar />
      <Quick />
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
        <Footer />
    </Router>
  );

}

export default App;
