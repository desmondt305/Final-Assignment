import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// Navigation bar component with Bootstrap classes for styling
const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Food Menu
      </Navbar.Brand>{" "}
      {/* Add an icon to the brand */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/add-food">
            Add Food
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
