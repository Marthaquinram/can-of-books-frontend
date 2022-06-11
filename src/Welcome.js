import React from 'react';
import Login from './auth/Login';

class Welcome extends React.Component {
  render() {
    return(
        <div id="Welcome!">
            <h1>Please login below to access your Best Books</h1>
            <Login />
        </div>
    )
  }
}

export default Welcome;
