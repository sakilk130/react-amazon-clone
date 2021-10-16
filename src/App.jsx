import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/App.css';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
