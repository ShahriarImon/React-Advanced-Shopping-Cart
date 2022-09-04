import React from "react";
import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{
            width: "3rem",
            height: "3rem",
            textAlign: "center",
            position: "relative",
          }}
          variant="outline-success"
          className="rounded-circle"
        >
          <FaShoppingCart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
