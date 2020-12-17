import React from 'react';
import Users from './Users';
import { Provider } from 'react-redux';
import store from '@redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Users />
        </Provider>
    );
};

export default App;
