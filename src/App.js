import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className={'app'}>
        <Switch>
          <Route path={"/checkout"}>
            <Header />
            <Checkout />
          </Route>        
          {/* <Route path={"/login"} component={Login}/> */}
          <Route path={"/login"}>
            <h2>Amazon Login</h2>
          </Route>
          <Route path={"/"}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
