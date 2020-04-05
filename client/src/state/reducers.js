import { createStore, compose } from 'redux';

const initialState = {
  chat: {
    users: [1, 2, 3]
  }
};

const reducer = (state) => {
  return state;
};

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducer, initialState, composeEnhancers());

export { store };
