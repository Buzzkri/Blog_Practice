import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, } from "semantic-ui-react"; 
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import ThisisaTest from './components/ThisisaTest';
import Blog from './components/Blog';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/ThisisaTest" component={ThisisaTest} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;