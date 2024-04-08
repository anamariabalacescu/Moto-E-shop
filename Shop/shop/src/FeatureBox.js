import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import './styles/FeatureBox.css'
import Card from 'react-bootstrap/Card';

const FeatureBox = (props) => {
  return (
    <Card className='ft-box'>
        <Card.Img variant="top" src={props.image} className='ft-box-img' alt=''/>
        <Card.Body>
          <Card.Text className='ft-box-text'>{props.title}</Card.Text>
        </Card.Body>
    </Card>
    // <Container>
    //   <div className='ft-box'>
    //       <figure className='ft-box-img'>
    //           <Link to={props.redirectUrl}>
    //             <img src={props.image} className='ft-box-img' alt='' />
    //           </Link>
    //           <figcaption>
    //               <h3 className='ft-box-text'>{props.title}</h3>
    //           </figcaption>
    //       </figure>
    //   </div>
    // </Container>
  )
}

export default FeatureBox