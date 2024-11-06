import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import "./style.css"
import RestaurantImg from "../Components/ExampleCarouselImage/C.jpg"

function Articles() {
  const articles = [
    {
      id: 1,
      title: "The History of Italian Cuisine",
      description: "Explore the rich history behind our authentic Italian dishes and the regions that inspire them.",
      image: "https://via.placeholder.com/300",
      link: "/article/history-of-italian-cuisine",
    },
    {
      id: 2,
      title: "How to Pair Wine with Your Meal",
      description: "Learn the art of pairing wine with different types of dishes to enhance your dining experience.",
      image: "https://via.placeholder.com/300",
      link: "/article/pair-wine-with-meal",
    },
    {
      id: 3,
      title: "Top 5 Dishes to Try at Our Restaurant",
      description: "A guide to our must-try dishes, handpicked by our chefs to give you an unforgettable experience.",
      image: "https://via.placeholder.com/300",
      link: "/article/top-5-dishes",
    },
    // Add more articles as needed
  ];

  return (
    <div className='articles'>
        <Container>
      <h2 className="my-4 text-center">Restaurant Articles</h2>
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={RestaurantImg} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="warning" href={article.link}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Articles;
