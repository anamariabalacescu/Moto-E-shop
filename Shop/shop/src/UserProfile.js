import {React, useState, Component} from 'react'
import Stack from 'react-bootstrap/Stack';
import circle from './img/circle.png';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import { GiFullMotorcycleHelmet } from "react-icons/gi";

import './styles/UserProfile.css'

class UserProfile extends Component {
  render() {
    const { username, email, userStatus } = this.props;

    const handleUpgradeClick = () => {
      // Add logic to handle upgrade functionality
      console.log('Upgrade button clicked!');
    };


  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <Stack direction="vertical" gap={2} className='stack'>
                <img src={circle}/>
                <Button as="a" variant="outline-light" className='button'> Your Profile </Button>
                <Button as="a" variant="outline-light" className='button'> Favourites </Button>
                <Button as="a" variant="outline-light" className='button'> Your Orders </Button>
                <Button as="a" variant="outline-light" className='button'> Store credit </Button>
                <Button as="a" variant="outline-light" className='button'> Delivery addresses </Button>
                <Button as="a" variant="outline-light" className='button'> Account settings </Button>
            </Stack>
          </Col>
          <Col md={9} >
              <Stack gap={4} className='stackdata'>
                <h2>Your profile</h2>
                <div>
                  <label>Username:</label>
                  <span>{username}</span>
                </div>
                <div>
                  <label>Email:</label>
                  <span>{email}</span>
                </div>
                <div>
                  <label>Status:</label>
                  <span>{userStatus}</span>
                </div>
                <div className="d-flex justify-content-center">
                <Button variant='outline-light' onClick={handleUpgradeClick} className='upgrade'>
                  <GiFullMotorcycleHelmet/>Upgrade
                </Button>

                </div>
              </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}

export default UserProfile