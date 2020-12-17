import * as types from '../actionTypes';
import { I_User } from '../reducers/users';

export const addUser = (user: I_User) => ({
    type: types.ADD_USER,
    payload: user,
});

export const getUsers = (users: I_User[]) => ({
    type: types.GET_USERS,
    payload: users,
});

export const getUsersAsync = () => async (dispatch: any) => {
    try {
        const usersJSON = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersJSON.json();
        dispatch(getUsers(users));
    } catch (e) {
        throw e;
    }
};
