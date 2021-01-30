import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function UserCard({ user }) {
    return (
        <li className="user-item">
            <header>
                <img src={user.avatar} alt={user.firstName} />
                <div className="user-info">
                    <strong>{user.first_name} {user.last_name}</strong>
                    <span>{user.email}</span>
                </div>
            </header>
            <p>User id is {user.id}</p>
            <div className="button-container">
                <Link to={`/users/${user.id}`} className="btn btn-primary text-light">
                    Edit User
                </Link>
                <button type="button" className="btn btn-danger">Delete User</button>
            </div>
        </li>
    )
}

export default UserCard;