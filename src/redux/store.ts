import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users';

const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
