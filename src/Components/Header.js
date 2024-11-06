import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./style.css"

function Header() {
  return (
    <>
      <Navbar className='nav_bar' fixed='top'>
        <Container>
          <Nav className="me-auto">
          <Button className='icon-button'>
          </Button>{''}
          <Navbar.Brand href="/home">Little Lemon</Navbar.Brand>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/reservation">Reservations</Nav.Link>
            <Nav.Link as={Link} to="/orderonline">Order Online</Nav.Link>
          </Nav>
        </Container>
         <Nav.Link as={Link} to="/login">
         <Button className='login-button' variant="warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
            </Button>{' '}
         </Nav.Link>
         <Nav.Link as={Link} to="/signup">
             <Button className='signUp-button' variant="warning">Sign Up</Button>{' '}
         </Nav.Link>
      </Navbar>
    </>
  );
}

export default Header;