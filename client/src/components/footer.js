import './footer.css';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {

  return (
    <Navbar>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">footer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">footer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">footer</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
  
}

export default Footer;