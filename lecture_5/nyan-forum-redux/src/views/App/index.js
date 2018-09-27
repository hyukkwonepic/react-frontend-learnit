import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Landing from '../Landing';
import Board from '../Board';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/board" component={Board} />
        </Switch>
      </Router>
    );
  }
}

export default App;