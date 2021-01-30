import React from 'react';

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
            {/* <a href="twitter.com">Acessar twitter</a> */}
            <div className="button-container">
                <button type="button" class="btn btn-primary">Edit User</button>
                <button type="button" class="btn btn-danger">Delete User</button>
            </div>
        </li>
    )
}

export default UserCard;