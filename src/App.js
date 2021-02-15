import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from './views/home';
import Analytics from './views/analytics';

// components
import Nav from '../components/nav';
import Footer from '../components/footer';


function App() {
  return (
    <Router>
      <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/analytics" component={Analytics} />
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
