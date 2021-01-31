import React, { useState } from 'react';
import LoadingPage from '../../components/LoadingPage/LoadingPage.js';
import api from '../../services/api';

import './styles.css';


function Login({ setToken }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [isLoading, setIsLoading] = useState();
	const [error, setError] = useState();


	const handleLogin = async e => {
		e.preventDefault();

		await loginUser({
			email,
			password
		});

	}

	async function loginUser({ email, password }) {
		setIsLoading(true);

		const response = await api.post(`/login?delay=2`, { email, password })
			.then(function (response) {
				response = response.data;
				//save token on session storage (persistent until tab is closed or user logout)
				sessionStorage.setItem("token", response.token);
				setToken(response.token);
			})
			.catch(function (error) {
				setError(error.response);
			});

		setIsLoading(false);

		return response;
	}

	if (isLoading) {
		return (
			<LoadingPage text={'Loading'} />
		);
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
			{error &&
				<div className="alert alert-danger" role="alert">
					Error! {error.data.error}.
                </div>
			}
			<div className="alert alert-primary" role="alert">
  				This SPA uses <a href="https://reqres.in" className="alert-link">Reqres API</a>.
				Try using this email: <strong>eve.holt@reqres.in</strong>
			</div>
			<p>made by <a href="https://github.com/bipe/spa-react">Luis F. Marconi</a> @ 2021</p>
		</li>
	)
}

export default Login;