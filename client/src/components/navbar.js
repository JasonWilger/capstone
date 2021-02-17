import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">The Pantry</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/analytics">Analytics</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
  
}

export default NavBar;