import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Info from './components/Info';
import Credits from './components/Credits';
import Home from './components/Home';
import Topics from './components/Topics';
import Failure from './components/Failure';

const routes = [
  { path: "/", exact: true, render: () => <h1>Welcome</h1>, component: null },
  { path: "/home", component: () => <Home />, exact: false, render: null },
  { path: "/about", component: () => <About />, exact: false, render: null },
  { path: "/info", component: () => <Info />, exact: false, render: null },
  { path: "/credits", component: () => <Credits />, exact: false, render: null },
  { path: "/topics", component: () => <Topics />, exact: false, render: null },
  { path: null, component: () => <Failure />, exact: false, render: null }
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <Switch>
            {routes.map(route => {
              if (route.path !== null && route.component !== null) {
                return <Route path={route.path} exact={route.exact} component={route.component} />
              } else if (route.path !== null) {
                return <Route path={route.path} exact={route.exact} render={route.render} />
              }
              return <Route render={route.render} />
            })}
          </Switch>
          {/* <Switch>
            <Route path="/" exact render={() => <h1>Welcome</h1>} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
            <Route path="/credits" component={Credits} />
            <Route path="/topics" component={Topics} />
            <Route component={Failure} />
          </Switch> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
