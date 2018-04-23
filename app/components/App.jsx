import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Popular from './Popular';
import MainNav from './Nav';
import Home from './Home';
import Battle from './Battle';

const App = props => (
  <Router>
    <div className="container">
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/popular" component={Popular} />
        <Route path="/battle" component={Battle} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>
    </div>
  </Router>
);

export default App;
