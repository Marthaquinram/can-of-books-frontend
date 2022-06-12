import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Logout from "./auth/Logout";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        <NavItem>
        </NavItem>
        {this.props.auth0.isAuthenticated &&
          <>
          <Logout /></>}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
