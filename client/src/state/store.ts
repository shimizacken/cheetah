import { createStore, compose, applyMiddleware, Store, Dispatch } from 'redux';
import { reducers } from './reducers';
import { middlewares } from './middlewares';
import { State } from './store.types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store: Store<State> & {
  dispatch: Dispatch;
} = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
