import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard.js';
import LoadingPage from '../../components/LoadingPage/LoadingPage.js';

import '../../styles/global.css'
import '../../styles/App.css'
import './styles.css'


class Users extends Component {

	state = {
		users: [],
		page: 1,
		queryData: {},
		isLoading: true,
	}

	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = async (page = 1) => {

		//retrieve token from session storage
		const token = sessionStorage.getItem('token');

		//save request header with authorization token
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		const response = await api.get(`/users?page=${page}&delay=2`, config);

		const { data, ...queryData } = response.data
		this.setState({ users: data, queryData, page: queryData.page, isLoading: false });
	}

	/////

	previousPage = () => {
		this.setState({ isLoading: true });

		const page = this.state.page;
		const prevPage = page - 1;

		if (prevPage < 1)
			return;

		this.loadUsers(prevPage);
	}

	nextPage = () => {
		this.setState({ isLoading: true });

		const { page, queryData } = this.state;
		const nextPage = page + 1;

		if (nextPage > queryData.total_pages)
			return;

		this.loadUsers(nextPage);
	}

	/////

	logout = () => {
		sessionStorage.clear();
		document.location.reload();
	}

	/////

	render() {
		const { users, page, queryData, isLoading } = this.state;

		if (isLoading) {
			return (
				<LoadingPage text={'Loading users...'} />
			);
		}

		return (
			<>
				<div id="app">
					<main>
						<strong id="page-title">Users</strong>
						<Link id="example404"className="btn btn-primary mb-2" to="/car">Test a 404 page</Link>
						<ul>
							{users.map(user => (
								<UserCard key={user.id} user={user} />
							))}
						</ul>
					</main>
				</div>
				<div className="pagination-container">
					<ul className="pagination justify-content-center">
						<li className={`page-item ${page === 1 ? "disabled" : ""}`}>
							<a className="page-link" href="#" onClick={this.previousPage}>Previous</a>
						</li>
						<li className={`page-item ${page === queryData.total_pages ? "disabled" : ""}`}>
							<a className="page-link" href="#" onClick={this.nextPage}>Next</a>
						</li>
					</ul>
				</div>
				<div className="logout">
					<button className="btn btn-danger" onClick={this.logout}>Logout</button>
				</div>

			</>
		);
	}
}

export default Users;
