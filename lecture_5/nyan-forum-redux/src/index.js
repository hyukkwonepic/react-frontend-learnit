import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { unregister } from './registerServiceWorker';
import './global-styles';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
