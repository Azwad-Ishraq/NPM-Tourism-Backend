import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './SinglePackage.css'


const SinglePackage = (props) => {
    const {days,price,img,title,_id} = props.package;
    console.log(title)
    return (
        <Card className='package-card' style={{ width: '18rem'}}>
  <Card.Img variant="top"  src={img} />
  <Card.Body className='cardBody'>
    <Card.Title>{title}</Card.Title>
    <Card.Text style={{textAlign:'left'}}>
      <p>{days} DAYS</p>
      <h3>Price:{price}$</h3>
    </Card.Text>
    
    <Button className='card-btn' variant="primary"><Link className='card-link' to={`/placeOrder/${_id}`}>Book Now
    </Link></Button>
   
  </Card.Body>
</Card>
    );
};

export default SinglePackage;