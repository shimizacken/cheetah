import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { middlewares } from './middlewares';

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middlewares)));

export { store };
