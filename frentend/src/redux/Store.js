import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import {reducerUser} from './reducer/reducerUser';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(reducerUser, /* preloadedState, */ compose(
    applyMiddleware(thunk)
  ));

  