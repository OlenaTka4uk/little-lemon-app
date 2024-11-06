import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import salat from "../images/greek salad.jpg";
import dessert from "../images/lemon dessert.jpg";
import dish from "../images/restauranfood.jpg";
import { Container } from 'react-bootstrap';
import "./style.css";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
    <div className='menu'>
    <Container className='menu-container'>
    <Card className='menu-cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert} />
      <Card.Body>
        <Card.Title>Lemon Dessert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link as={Link} to="/reservation">
         <Button variant="warning">Add</Button>
        </Link>
      </Card.Body>
     </Card>

     <Card className='menu-cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert} />
      <Card.Body>
        <Card.Title>Lemon Dessert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Add</Button>
      </Card.Body>
     </Card>

     <Card className='menu-cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert} />
      <Card.Body>
        <Card.Title>Lemon Dessert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Add</Button>
      </Card.Body>
     </Card>

     <Card className='menu-cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert} />
      <Card.Body>
        <Card.Title>Lemon Dessert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Add</Button>
      </Card.Body>
     </Card>

     <Card className='menu-cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert} />
      <Card.Body>
        <Card.Title>Lemon Dessert</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Add</Button>
      </Card.Body>
     </Card>
    </Container>
    </div>
    </>
    
  );
}

export default Menu;