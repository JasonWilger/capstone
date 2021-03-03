import './navbar.css';
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How to use The Pantry.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>some text</h3>
          <h4>hgfdhf</h4>
          <ul>
            <ls>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </ls>
          </ul>
          <h4>hgfdhf</h4>
          <ul>
            <ls>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </ls>
          </ul>
          <h4>hgfdhf</h4>
          <ul>
            <ls>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </ls>
          </ul>
          <h4>hgfdhf</h4>
          <ul>
            <ls>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </ls>
          </ul>
          <h4>hgfdhf</h4>
          <ul>
            <ls>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </ls>
          </ul>
          <h4>hgfdhf</h4>
          <ul>
            <ls>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </ls>
          </ul>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);


  return (

    <Navbar collapseOnSelect id="navBody" expand="lg">
      <Link id="logo" to="/">
        <div className="logoContent">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
        </svg>
        The Pantry
        </div>
        </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="navItems">

            {/* modal */}
            <Button variant="warning" onClick={() => setModalShow(true)}>
              Instructions
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          {/* end modal */}
          
          <Link id="dock" to="/dock">Dock</Link>
          <Link id="yourList" to="/yourList">List</Link>
          <Button id="endSesh" variant="danger" href="/">
            End 
          </Button>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    

  );
  
}

export default NavBar;