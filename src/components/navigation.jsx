import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <div className="links">
          <Navbar bg='dark' variant='dark'>

              <Container>
                  <Navbar.Brand>Home</Navbar.Brand>

                  <NavLink to="/About" className="link" activeClassName="active">
          About
        </NavLink>
        
        <NavLink to="/" className="link" activeClassName="active" exact>
          Reminders
        </NavLink>

        <NavLink to="/add" className="link" activeClassName="active">
          Add Reminders
        </NavLink>

        <NavLink to="/ContactUs" className="link" activeClassName="active">
          Contact Us
        </NavLink>

        </Container>

        </Navbar>
      </div>
    </header>
  );
};

export default Navigation;