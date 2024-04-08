import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ImPhone} from '@react-icons/all-files/im/ImPhone.esm'
import {ImLocation2} from '@react-icons/all-files/im/ImLocation2'
import {ImMail4} from '@react-icons/all-files/im/ImMail4'
import Button from 'react-bootstrap/Button'
import './styles/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
    <Container>
        <Row>
        <h2><b>Two Wheeled Heart</b></h2>
        </Row>
        <Row>
            <Col className='col'>
                <h4>Contact Us</h4>
                <p><ImLocation2/> Meggenhornstrasse 53, 6045<br/>
                Meggen</p>
                <p><ImPhone/> +41 41-378-1275</p>
                <p><ImMail4/> 2wh@yahoo.com</p>
            </Col>
            <Col className='col'>
                <h4>Schedule</h4>
                <Col>
                <p>Moday: 07<sup>00</sup> - 19<sup>00</sup><br/>
                Tuesday: 07<sup>00</sup> - 19<sup>00</sup><br/>
                Wednesday: 07<sup>00</sup> - 19<sup>00</sup><br/>
                Thursday: 07<sup>00</sup> - 19<sup>00</sup><br/>
                Friday: 07<sup>00</sup> - 19<sup>00</sup><br/>
                Weekend: 09<sup>00</sup> - 12<sup>00</sup>
                </p>
                </Col>
            </Col>
            <Col md={2}>
              <h4>Quick access</h4>
              <Button a href="/contact" variant="outline-light" className="w-100 mb-2">Ask a question</Button>
              <Button a href="/shop" variant="outline-light" className="w-100 mb-2">Go Shopping</Button>
              <Button a href="/about" variant="outline-light" className="w-100 mb-2">Our story</Button>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Footer