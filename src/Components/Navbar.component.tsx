import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Navbars: React.FC = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Link to="/" className="text-white brand-text">
          Harry Potter
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navbars;
