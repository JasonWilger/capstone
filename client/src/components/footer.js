import './footer.css';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {

  return (

    <Navbar id="footerBody">
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link id="item1" href="/home">footer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="item2" eventKey="link-1">footer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="item3" eventKey="link-2">footer</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>

  );
  
}

export default Footer;