import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Popular from './Popular';
import MainNav from './Nav';
import Home from './Home';

const App = props => (
  <Router>
    <div className="container">
      <MainNav />
      <Route exact path="/" component={Home} />
      <Route path="/popular" component={Popular} />
    </div>
  </Router>
);

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Popular />
//       </div>
//     );
//   }
// }

export default App;
