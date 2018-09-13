import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
