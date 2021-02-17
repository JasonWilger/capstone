import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (

    <Navbar collapseOnSelect id="navBody" expand="lg">
      <Link id="logo" to="/">The Pantry</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" id="navItems" className="justify-content-end">
        <Nav>
          <Link id="home" to="/">Home</Link>
          <Link id="analytics" to="/analytics">Analytics</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
  
}

export default NavBar;