import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './navbar.css'

function NavBar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <p> Adóptame </p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
