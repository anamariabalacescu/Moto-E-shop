import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './styles/Signin.css';
import Form from 'react-bootstrap/Form';
import { useUser } from './hooks/useUser';

const Sigin = ({handleClose}) => {
  const {login} = useUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    const result = await login(user.email, user.password);
    if (result) {
      handleClose();
    }
  }
  return (
    <div>
       <Form onSubmit={handleSubmit} id="signin-form">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          User/Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Inser usrname or email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Insert Password" />
        </Col>
      </Form.Group>
      <Button variant="primary" type='submit'>
          Login
      </Button>
    </Form>
    </div>
  )
}

export default Sigin