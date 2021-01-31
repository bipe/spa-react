import React, { useState } from 'react';
import LoadingPage from '../../components/LoadingPage';
import api from '../../services/api';

import './styles.css';


function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleLogin = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            password
        });

        setToken(response.token);

        //save token on storage
    }

    async function loginUser({ email, password }) {
        const response = await api.post(`/login?delay=2`, { email, password }) //set loading page here
            .then(resp => resp.data);

        return response;
    }


    return (
        <li className="user-item body-card">
            <header className="header-title">
                <strong>
                    A Simple SPA
            </strong>
                <p>powered by React</p>
            </header>
            <form className="user-section" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" className="form-control" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p>made by <a href="https://github.com/bipe/spa-react">Luis F. Marconi</a> @ 2021</p>
        </li>
    )
}

export default Login;