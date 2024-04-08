import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './styles/ItemBox.css';
const ItemBox = (props) => {
  return (
    //<Card style={{ width: '18rem', marginBottom:'2rem', display: 'flex', position: 'sticky'}}>
    <Card className='card'>
      <Link to={props.redirectUrl}>
        <Card.Img variant="top" src={props.image} className='ft-box-img' alt=''/>
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ItemBox;
