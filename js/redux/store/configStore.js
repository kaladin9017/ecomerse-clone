import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from '../reducers/rootReducer';

const history = createHistory();
const middleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, middleware)(createStore);

const store = createStoreWithMiddleware(reducer);
export default store;
