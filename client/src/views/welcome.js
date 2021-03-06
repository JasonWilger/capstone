import './welcome.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import chartImg from '../img/responsive.png';


const Welcome = () => {


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
      </Navbar>

      <div className="welcomeBody">

        <div id="welcomeTitle">
          Welcome!
        </div>

        <div className="split">
        <div className="appDisc">
        <h2>We help you find what you couldn't before.</h2>
          <p>
          Did your last grocery trip cost you more than normal?
          Maybe you went to a new store or bought some items you didn't need.
          The Pantry was designed to help you see what you didn't before.
          With an interactive list manager and a dynamic chart we help 
          you see shopping trends or unwanted items from your latest trip to the store.
          </p>

        </div>

        <div id="promptUser">
        <Card id="startCard" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title id="startTitle">Lets Get Started!</Card.Title>
            <Link to="/yourList">
              <Button variant="" id="startButton">
                Start
              </Button>
            </Link>

          </Card.Body>
        </Card>
        </div>

        </div>

        <div className="chartInfo">
          <h2>We help you see the problem.</h2>
          <img src={chartImg} alt="chart image"/>
          <p>By using a dynamic chart library we are able to help you see
            your list like you haven't before.</p>
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

export default Welcome;