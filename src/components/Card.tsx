import React from 'react';

export interface I_CardProps {
    user: any;
}

const Card: React.FC<I_CardProps> = ({ user }) => {
    return (
        <div className="card">
            <div className="card__title">{user.name}</div>
            <div className="card__subtitle">{user.company.name} </div>
        </div>
    );
};

export default Card;
