import { createStore } from 'redux';
import { addUser, getUsers } from './actions/users';
import usersReducer from './reducers/users';

const store = createStore(usersReducer);

export default store;
