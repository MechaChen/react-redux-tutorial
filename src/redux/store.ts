import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addUser, getUsers } from './actions/users';
import usersReducer from './reducers/users';

const store = createStore(usersReducer, composeWithDevTools());

export default store;
