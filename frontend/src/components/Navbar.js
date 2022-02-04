import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/home">SafarNama</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/login">Login</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/signup">SignUp</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
