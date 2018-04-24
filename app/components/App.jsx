import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Popular from './Popular';
import MainNav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

const App = props => (
  <Router>
    <div className="container">
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/popular" component={Popular} />
        <Route exact path="/battle" component={Battle} />
        <Route path="/battle/results" component={Results} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>
    </div>
  </Router>
);

export default App;
