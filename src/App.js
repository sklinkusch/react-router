import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Info from './components/Info';
import Credits from './components/Credits';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/credit" component={Credits} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
