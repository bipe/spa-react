import React, { Component } from 'react';
import LoadingPage from '../../components/LoadingPage';
import api from '../../services/api';

import './styles.css';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            err: '',
            isLoading: false,
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    /////

    async handleLogin(e) {
        e.preventDefault();

        //set as 'sent' user and 
        //HERE

        const { email, password } = this.state;

        //check if user or password is invalid to prevent continue
        //HERE

        this.setState({ isLoading: true });

        //api POST login info
        const response = await api.post(`/login?delay=2`, { email, password })
            .then(
                resp => resp.data,
                err => this.setState({ err, loading: false })
            );

        //hold bearer token
        api.defaults.headers.common['Authorization'] = `bearer ${response.key}`;

    }

    render() {
        const { email, password, isLoading } = this.state;

        if (!isLoading) {
            return (
                <li className="user-item body-card">
                    <header className="header-title">
                        <strong>
                            A Simple SPA
                        </strong>
                        <p>powered by React</p>
                    </header>
                    <form className="user-section" onSubmit="">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="form-control" placeholder="E-mail" value={email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={password} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p>made by <a href="https://github.com/bipe/spa-react">Luis F. Marconi</a> @ 2021</p>
                </li>
            );
        }

        return (
            <LoadingPage />
        );

    }
}

export default Login;