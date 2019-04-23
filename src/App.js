import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Info from './components/Info';
import Credits from './components/Credits';
import Home from './components/Home';
import Topics from './components/Topics';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <Route path="/" exact render={() => <h1>Welcome</h1>} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/credits" component={Credits} />
          <Route path="/topics" component={Topics} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
