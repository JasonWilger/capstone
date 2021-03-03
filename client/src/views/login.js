import './login.css';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import logIn from '../firebase/logIn.firebase';
import signUp from '../firebase/signUp.firebase';
import chartImg from '../img/line-ex.png';
import firebase from '../firebase/firebase';
import { Cookies } from "js-cookie";
import { useHistory } from "react-router-dom";
import ItemDataService from '../services/item.services';
import UserDataService from '../services/users.service';



const Login = (props) => {

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // end modal


const history = useHistory()

function HandleLogIn() {

    console.log('Login is running')
    let emailValue = document.getElementById('formBasicEmail').value;
    let passwordValue = document.getElementById('formBasicPassword').value;
    let errorMessageBox = document.getElementById('errorMessage');
    firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then((response) => {
        Cookies.set('userToken', response.user.uid)
        history.push("/dock");
    })
    .then(() => {
        props.logInClick()
    })
    .then(() => {
        return UserDataService.get(Cookies.get('userToken'))
    })
    .then((response) => {
        props.findUser(response.data[0])
        findListData();
    })
    .catch(function(error) {
        errorMessageBox.innerHTML = error.message;
        console.log(error);
    });
}

function findListData() {
  ItemDataService.getAll(Cookies.get('userToken'))
    .then((response) => {
        props.findItems(response.data);
    })
}


  return (

    <div>
      <Navbar id="navBar" bg="light" variant="light">
      <Link id="logo" to="/">
        <div className="logoContent">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
          </svg>
          The Pantry
        </div>
      </Link>
      <Navbar.Collapse id="responsive-navbar-nav" id="navItems" className="justify-content-end">
        <Nav>
          <Button id="navSignUp" variant="" onClick={handleShow}>
            Sign-up
          </Button>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="loginBody">

        <div id="loginTitle">
          Welcome!
        </div>

        <div className="split">
        <div className="appDisc">
        <h2>The door you can open from anywhere.</h2>
          <p>
          The Pantry is the latest and greatest grocery management application!
          This app was designed to help frequent shoppers remember what was need,
          get only what is required, and to take a load off of remembering what is stored in the kitchen.
          The dynamic list allows users to add items from a recent trip to the ongoing list and users
          can even update the items after they are saved.
          </p>

        </div>
        <div id="promptUser">
        <Card id="signInCard" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div>
              <Button variant="primary" onClick={HandleLogIn}>
                Submit
              </Button>

              <>
                <Button id="noAcc" variant="" onClick={handleShow}>
                Don't have an account?
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign-Up</Modal.Title>
                  </Modal.Header>
                  
                  <div id="signupForm">
                  <Form.Group controlId="signupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  </div>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={signUp}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>

              </div>
            </Form>
          </Card.Body>
        </Card>
        </div>
        </div>

        <div className="chartInfo">
          <h2>We help you prevent buying too much or not enough!</h2>
          <img src={chartImg} alt="chart image"/>
        </div>

          <div className="footer">
            <div id="foot-info">
              <div className="contact">
                <div id="contact">Contact</div>
                </div>
              <div id="foot-links">
                <a href="https://www.linkedin.com/in/jason-wilger/">Linkedin</a>
                <a href="https://github.com/JasonWilger/capstone">GitHub</a>
                <a href="https://vsco.co/wilger11/gallery">VSCO</a>
              </div>
            </div>
          </div>

      </div>
    </div>

  );
  
}

export default Login;