import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import Config from './helpers/utils/okta-sdk';



ReactDOM.render(
  <Provider store={store}>
    <Security {...Config}>
      <Router>
        <App />
      </Router>
    </Security>
  </Provider>,
  document.getElementById('root')
);

