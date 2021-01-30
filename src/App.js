import React, { useState, useEffect } from 'react';
import api from './services/api';

//components:
import UserCard from './components/UserCard';

import './styles/global.css'
import './styles/App.css'
import './styles/Sidebar.css'
import './styles/Main.css'



function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    //get from api: list of users
    async function loadUsers() {
      const response = await api.get('/users?page=1');

      setUsers(response.data.data);
    }

    loadUsers();

  }, [] );

  return (
    <div id="app">
{/*       <aside>
        <h4>Sidebar</h4>
      </aside> */}
      <main>
        <ul>
          {users.map(user => (
            <UserCard key={user.id} user={user}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
