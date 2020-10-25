import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Tops } from './components/Tops';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
      <p className="title">
          REACT REDUX 
        </p>
        <span>
          <span>SEE: </span>
          <Link 
            to="/react"   
            className="App-link">
            React Component
          </Link>
          <span>, </span>
          <Link 
            to="tops"   
            className="App-link">
            Tops Component
          </Link>
          {/* <span>, </span>
          <Link 
            to="/jhaze"   
            className="App-link">
            Jhaze Component
          </Link>
          ,<span> and </span>
          <Link 
            to="/marvin"   
            className="App-link">
            Marvin Component
          </Link> */}
        </span>

        <Switch>
          <Route path="/react">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
          </Route>
          <Route path="/tops">
            <Tops />
          </Route>
          {/* <Route path="/jhaze">
            <Jhaze />
          </Route>
          <Route path="/marvin">
            <Marvin />
          </Route> */}
        </Switch>

      </header>
    </div>

    </Router>
  );
}

export default App;
