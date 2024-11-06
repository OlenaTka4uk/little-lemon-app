import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./style.css"

function Reservation() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationDetails = {
      name,
      date,
      time,
      people,
      specialRequests,
    };
    console.log('Reservation Details:', reservationDetails);
    alert('Reservation submitted!');
  };

  return (
    <div className='reservation'>
        <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="my-4 text-center">Make a Reservation</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTime" className="mt-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPeople" className="mt-3">
              <Form.Label>Number of People</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="20"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSpecialRequests" className="mt-3">
              <Form.Label>Special Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any special requests (optional)"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="mt-4">
              Submit Reservation
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Reservation;
