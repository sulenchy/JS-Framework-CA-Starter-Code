import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container className="">
        <Link className="btn" to={'/'}>Starter code</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="btn " to={'/'}>Home</Link>
            <Link className="btn " to={'/about'}>About</Link>
          </Nav>
          <Link to={'/login'} className="btn">Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
