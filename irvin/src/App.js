import './App.css';
import {Switch, Route} from 'react-router-dom';
import axios from "axios";
import {Form, Button} from "react-bootstrap"
import Navigation from "./components/Navigation"
import HomePage from "./components/HomePage"
import React, {useEffect, useState} from "react";

function App() {


  return (
      <div className="App">
          <Navigation />
          <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
          </Switch>
      </div>

  );
}

export default App;
