import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import LoadingPage from '../LoadingPage/LoadingPage.js';

import './styles.css';

function UserCard({ user }) {
    const [isLoading, setIsLoading] = useState(false);

    //retrieve token from session storage
    const token = sessionStorage.getItem('token');

    //save request header with authorization token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    //delete from api: single user
    async function deleteUser(id) {

        var confirmation = window.confirm("You really want to delete this user?\nAction is permanent.");
        setIsLoading(true);

        if (confirmation) {
            const response = await api.delete(`/users/${id}?delay=2`, config)
                .then(resp => resp.status);

            if (response == 204) {
                setIsLoading(false);
                alert("User deleted!");
            }
            else {
                setIsLoading(false);
                alert("Some error ocurred. The API may be down.");
            }

        }

    }

    if (isLoading) {
        return (
            <div className="load-container screen-centered">
                <LoadingPage />
            </div>

        );
    }


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
                <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
        </li>
    )
}

export default UserCard;