import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// nav
import Navbar from './components/Navbar';

// pages
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page-one" component={PageOne} />
          <Route exact path="/page-two" component={PageTwo} />
          <Route exact path="/page-three" component={PageThree} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
