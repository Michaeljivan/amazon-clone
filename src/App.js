import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className={'app'}>
        <Switch>
          <Route path={"/checkout"} component={Checkout}/>
          {/* <Route path={"/login"} component={Login}/> */}
          <Route path={"/login"}>
            <h2>Amazon Login</h2>
          </Route>
          <Route path={"/"}>
            <Header />
            <h2>Amazon Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
