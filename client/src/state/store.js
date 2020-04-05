import { createStore, compose } from 'redux';
import { reducers } from './reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducers, {}, composeEnhancers());

export { store };
