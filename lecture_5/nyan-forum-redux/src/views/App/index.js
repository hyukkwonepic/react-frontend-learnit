import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Landing from '../Landing';
import Board from '../Board';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/board" component={Board} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;