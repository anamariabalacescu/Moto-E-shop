import React from 'react'
import FeatureBox from './FeatureBox';
import iron883 from './img/iron883.jpg';
import cruiser from './img/cruiser.jpg';
import king from './img/roadking.jpg';
import flrt from './img/flrt_freewheeler.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/HomeFeature.css';

const HomeFeature = () => {
  return (
    <div id='features'>
      <br/>
    <h2 style={{color:'aliceblue'}}>Choose your weapon</h2> <br/>
      <Container>
        <Row>
          <div  className='ft-container'>
            <Col xs={3} md={3}>
              <FeatureBox image={iron883} title="Sportster" redirectUrl="/about"/>
            </Col>
            <Col xs={3} md={3}>
              <FeatureBox image={cruiser} title="Cruiser"/>
            </Col>
            <Col xs={3} md={3}>
              <FeatureBox image={king} title="Grand American Touring"/>
            </Col>
            <Col xs={3} md={3}>
              <FeatureBox image={flrt} title="Trike"/>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default HomeFeature;