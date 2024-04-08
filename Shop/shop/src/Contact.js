import React, { useState } from 'react';
import './styles/Contact.css';
import { Container, Row, Form, FormGroup, Button, Col  } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle sending the email using a backend service or API
    console.log('Form submitted:', formData);
    // You can also reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container style={{ 
      maxWidth: '500px', margin: 'auto', padding: '20px', color:'white',
       boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Row style={{margin:10}}>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{margin:10}}>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{margin:10}}>
          <Col>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
