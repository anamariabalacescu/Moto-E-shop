import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/About.css';
import rep from './img/rep.jpg';

const About = () => {
  return (
    <div className='story'>
        <Container>
            <Row>
                <Col md={6}>
                <p className='p'>
                Once upon a time, in a garage filled with the scent of motor oil and dreams, two friends shared a love for freedom and motorcycles. Tired of the same old routine, they decided to turn their passion into a business venture.
                Armed with determination, a few wrenches, and an abundance of enthusiasm, they transformed their humble garage into the headquarters of Two Wheeled Heart. With grit, grease, and a whole lot of trial and error, they built their business from the ground up.
                </p>
                </Col>
                <Col md={6}>
                <img src={rep} className="photo" alt="Two Wheeled Heart Rep" />
                </Col>
            </Row>
            <Row className='p'>
            From late nights tinkering with engines to early mornings brainstorming marketing strategies, they poured their hearts and souls into every aspect of their business. Through setbacks and successes, they remained steadfast in their belief that life is better on two wheels.
        As word spread and their reputation grew, Two Wheeled Heart became more than just a business – it became a community. Motorcycle enthusiasts from far and wide flocked to their shop, drawn by the promise of quality service, expert advice, and a shared love for the open road.
        Today, Two Wheeled Heart stands as a testament to the power of passion, perseverance, and the pursuit of dreams. With a loyal customer base and a thriving business, our founders continue to ride the wave of success, fueled by their love for motorcycles and the freedom they represent.
            </Row>
        </Container>
    </div>
  )
}

export default About