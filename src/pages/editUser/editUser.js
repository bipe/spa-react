import React, { Component } from 'react';
import LoadingPage from '../../components/LoadingPage/LoadingPage.js';
import api from '../../services/api';

import './styles.css';

class EditUser extends Component {

   constructor() {
      super();
      this.handleUpdateUser = this.handleUpdateUser.bind(this);
   }

   state = {
      user: {},
      isLoading: true,
      token: sessionStorage.getItem('token')
   };

   config = {
      headers: {
         Authorization: ''
      }
   };

   //lifecycle hook so we can wait for responses and manipulate loading
   async componentDidMount() {
      const { id } = this.props.match.params;

      this.config.headers.Authorization = `Bearer ${this.state.token}`;

      const response = await api.get(`/users/${id}?delay=2`, this.config)

      this.setState({ user: response.data.data, isLoading: false });
   }

   //onSubmit, handle update request
   handleUpdateUser(e) {
      e.preventDefault();

      const first_name = this.first_name.value;
      const last_name = this.last_name.value;

      const data = {
         first_name,
         last_name
      }

      this.updateUser(data);
   }

   //api PUT with new data
   async updateUser(data) {
      const { id } = this.props.match.params;

      this.setState({
         isLoading: true,
      });

      this.config.headers.Authorization = `Bearer ${this.state.token}`;

      const response = await api.put(`/users/${id}?delay=2`, { data }, this.config)
         .then(resp => resp.data);

      this.setState({ isLoading: false });

      if (response.updatedAt)
         alert("User updated successfully\n\nFirst name: " + response.data.first_name + "\nLast name: " + response.data.last_name);
      else
         alert("Error: Couldn't update user at this time. API may be down.");
   }

   render() {
      const { user, isLoading } = this.state;

      if (!isLoading) {
         return (
            <li className="user-item body-card">
               <header className="user-section">
                  <img src={user.avatar} alt={user.firstName} />
                  <div className="user-info">
                     <strong>{user.first_name} {user.last_name}</strong>
                     <span>{user.email}</span>
                     <p>User id is {user.id}</p>
                  </div>
               </header>
               <form className="user-section" onSubmit={this.handleUpdateUser}>
                  <div className="form-group">
                     <label htmlFor="first_name">First Name</label>
                     <input type="text" className="form-control" placeholder="First Name" ref={(input) => this.first_name = input} defaultValue={user.first_name} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="last_name">Last Name</label>
                     <input type="text" className="form-control" placeholder="Last Name" ref={(input) => this.last_name = input} defaultValue={user.last_name} />
                  </div>
                  <button type="submit" className="btn btn-primary">Update User</button>
               </form>
            </li>
         );
      }

      return (
         <LoadingPage text={'Loading'} />
      );

   }
}

export default EditUser;