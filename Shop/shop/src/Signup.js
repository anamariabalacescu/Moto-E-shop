import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/Signup.css';
import Form from 'react-bootstrap/Form';
import { User } from './schemas/User';
import { useUser } from './hooks/useUser';

const Signup = ({handleClose}) => {

  const {signup} = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User({
      id: null, 
      email: e.target[2].value,
      name: e.target[0].value + ' ' + e.target[1].value,
      address: e.target[4].value,
      type: e.target[5].value,
      password: e.target[6].value});
    const result = await signup(user);
    if (result) {
      handleClose();
    }
  }

  return (
    <div>
       <Form id="signup-form"
        onSubmit={handleSubmit}
       >
       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          First name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Insert firstname" />
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Lastname
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Insert lastname" />
        </Col>
        </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Insert email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Confirm email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Confirm email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Adress
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Insert address" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={{display: 'flex'}}>
        <Form.Label column sm="2" >
          Role
        </Form.Label>
        <Form.Select defaultValue="Open this to select role" style={{width: '79%', marginLeft: '0.6rem'}}>
          <option>Open this to select role</option>
          <option value="producer">Producer</option>
          <option value="client">Client</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Insert Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Confirm password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
      </Form.Group>
      <button type="submit" className="btn btn-primary">Sign up</button>
    </Form>
    </div>
  )
}

export default Signup