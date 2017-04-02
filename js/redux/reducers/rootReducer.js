import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  router: routerReducer,

});

export default rootReducer;
