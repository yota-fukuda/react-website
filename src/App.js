import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products'
import "./App.css"

import {
  BrowserRouter as Router,
  Swich,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Products}/>
      </Router>
    </>
  );
}

export default App;
