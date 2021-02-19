import './login.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import logIn from '../components/loginButton'
import chartImg from '../img/line-ex.png'

const Login = () => {

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // end modal


  return (

    <div id="loginBody">

      <div id="loginTitle">
        Welcome to The Pantry!
      </div>

      <div id="split">
      <div id="appDisc">
      <h2>The door you can open from anywhere.</h2><br /><br />
        <p>
        this is a description of the app this is a description of the app 
        this is a description of the app
        this is a description of the appthis is a description of the app
        this is a description of the appthis is a description of the app
        this is a description of the appthis is a description of the app
        this is a description of the appthis is a description of the app
        this is a description of the appthis is a description of the app
        this is a description of the appthis is a description of the app
        </p>
      </div>
      <div id="promptUser">
      <Card style={{ width: '18rem' }}>
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
            <Button variant="primary" type="submit">
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
                </div>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => logIn()}>
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

      <div id="chartInfo">
        <h2>We help you prevent buying too much or not enough!</h2>
        <img src={chartImg} alt="chart image"/>
      </div>

      <div id="pageTail">
        this is the bottom of the signin page 
      </div>

    </div>

  );
  
}

export default Login;