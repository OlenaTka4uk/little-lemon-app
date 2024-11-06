import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Dish1 from "../images/dish1.jpg"
import "./style.css"

function OrderOnline() {
  const [cart, setCart] = useState([]);


  const dishes = [
    { id: 1, name: "Margherita Pizza", description: "Classic cheese pizza", price: 8.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Caesar Salad", description: "Fresh romaine lettuce with Caesar dressing", price: 6.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta", price: 10.99, image: "https://via.placeholder.com/150" },
];


  const addToCart = (dish) => {
    setCart([...cart, dish]);
    alert(`${dish.name} added to the cart!`);
  };

  return (
    <div className='online-section'>
        <Container>
      <h2 className="my-4 text-center">Order Online</h2>
      <Row>
        {dishes.map((dish) => (
          <Col md={4} key={dish.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={Dish1} alt={dish.name} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Card.Text><strong>Price: ${dish.price.toFixed(2)}</strong></Card.Text>
                <Button variant="warning" onClick={() => addToCart(dish)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5">Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong></p>
    </Container>
    </div>
  );
}

export default OrderOnline;
