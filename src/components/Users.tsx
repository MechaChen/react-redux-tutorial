import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@components/Card';
import { getUsersAsync } from '@redux/actions/users';
import { I_User } from '@redux/reducers/users';

const tempUsers: I_User[] = [
    {
        id: 1,
        name: '白熊',
        company: { name: '角落生物' },
    },
    {
        id: 2,
        name: '企鵝?',
        company: { name: '角落生物' },
    },
    {
        id: 3,
        name: '炸豬排',
        company: { name: '角落生物' },
    },
    {
        id: 4,
        name: '貓',
        company: { name: '角落生物' },
    },
    {
        id: 5,
        name: '蜥蜴',
        company: { name: '角落生物' },
    },
];

const Users = () => {
    const users = useSelector((state: I_User[]) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

    return (
        <div className="users">
            {users.length > 0 ? (
                users.map((user) => <Card key={user.id} user={user} />)
            ) : (
                <p>No Users Available</p>
            )}
        </div>
    );
};

export default Users;
