import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store/configStore';

import RouteConfig from './RouteConfig';

// import "semantic-ui-css/semantic.css";

ReactDOM.render(
  <Provider store={store}>
    <RouteConfig />
  </Provider>,
  document.getElementById('react')
);
