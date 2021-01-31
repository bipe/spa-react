import React, { Component } from 'react';
import './styles.css';

class NotFound extends Component {
   render() {
      return (
         <div className="not-found screen-centered">
            <strong>404 - Page not found :(</strong>
            <p>Check if you typed a valid URL.</p>
         </div>
      );
   }
}

export default NotFound;