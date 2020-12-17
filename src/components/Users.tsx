import React, { useEffect } from 'react';
import Card from '@components/Card';

const tempUsers = [
    {
        id: 1,
        name: 'Yooa',
        company: {
            name: 'WM',
            catchPhrase: 'find it ~ Oh My Girl',
        },
    },
    {
        id: 2,
        name: 'Binnie',
        company: {
            name: 'WM',
            catchPhrase: 'find it ~ Oh My Girl',
        },
    },
];

const Users = () => {
    return (
        <div className="users">
            {tempUsers.length > 0 ? (
                tempUsers.map((user) => <Card key={user.id} user={user} />)
            ) : (
                <p>No Users Available</p>
            )}
        </div>
    );
};

export default Users;
