import React, { useContext } from 'react';
import './App.css';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

// nav
import Navbar from './components/Navbar';

// pages
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-100%, 0)" }
  });

  return (
    <>
      <div className="App"> 
      <Navbar />

        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route exact path="/page-one" component={PageOne} />
              <Route exact path="/page-two" component={PageTwo} />
              <Route exact path="/page-three" component={PageThree} />

            </Switch>
          </animated.div>
        ))}
          
      </div>
    </>
  );
}

export default App;
