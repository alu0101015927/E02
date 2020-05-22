import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import HomeView from './components/sections/HomeView/HomeView';
import SignUpView from './components/sections/SignUpView/SignUpView';
import RegisterView from './components/sections/RegisterView/RegisterView';
import SearchView from './components/sections/SearchView/SearchView';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/signup">
          <SignUpView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/newgame">
          
        </Route>
        <Route path="/search">
          <SearchView />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
