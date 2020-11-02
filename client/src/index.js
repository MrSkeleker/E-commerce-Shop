import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';

import App from './containers/App';

import * as serviceWorker from './serviceWorker';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
