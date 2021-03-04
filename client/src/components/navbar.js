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
          <h4>Step 1:</h4>
          <ul>
            <ls>
              Take the receipt from your last trip to the store and
              input each item you bought along with the price rounded
              to the nearest whole number.
            </ls>
          </ul>
          <h4>Step 2:</h4>
          <ul>
            <ls>
              Review the list you just entered to make sure all
              items are there. If you made a mistake, you can update your list item by clicking on 
              the item name and selecting the edit button.
            </ls>
          </ul>
          <h4>Step 3:</h4>
          <ul>
            <ls>
              Now you are ready to take a look at your results.
              Click on the dock tab and start reviewing the chart.
              (if you need to look at your list again,
              scroll to the bottom of the page to see your updated list)
            </ls>
          </ul>
          <h4>Step 4:</h4>
          <ul>
            <ls>
              As you review the chart, make sure to hover over the points
              on the graph to see your item data.
            </ls>
          </ul>
          <h4>Step 5:</h4>
          <ul>
            <ls>
              By now you should be able to see the average quantity of items
              you purchased and the average dollar amount spent.
            </ls>
          </ul>
          <h4>Step 6:</h4>
          <ul>
            <ls>
              Take notes of your results and save them for your next trip to the store!
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
          
          <Link id="yourList" to="/yourList">List</Link>
          <Link id="dock" to="/dock">Dock</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    

  );
  
}

export default NavBar;