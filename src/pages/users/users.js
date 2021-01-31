import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard.js';

import '../../styles/global.css'
import '../../styles/App.css'
import '../../styles/Main.css'


function Users() {
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {

		//retrieve token from session storage
		const token = sessionStorage.getItem('token');

		//save request header with authorization token
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};

		//get from api: list of users
		async function loadUsers() {
			const response = await api.get('/users?page=1', config);

			setUsers(response.data.data);
		}

		loadUsers();

	}, []);

	return (
		<div id="app">
			<main>
				<Link to="/car">Teste pagina 404</Link>
				<ul>
					{users.map(user => (
						<UserCard key={user.id} user={user} />
					))}
				</ul>
			</main>
		</div>
	);
}

export default Users;
