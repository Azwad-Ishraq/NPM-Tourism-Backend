import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Button from 'react-bootstrap/Button';

import './PlaceOrder.css'
const PlaceOrder = () => {
    const { packageId } = useParams()
    const [Tourpackage, setTourPackage] = useState({})
    const [successMsg,setSuccessMsg] = useState('')
    const { title, price, days, img } = Tourpackage
    const { user } = useAuth()
    const { displayName, email } = user;

    const userNameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const passRef = useRef()
   
   

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [])

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        const userNameValue = userNameRef.current.value;
        const emailValue = emailRef.current.value;
        const addressValue = addressRef.current.value;
        const passValue = passRef.current.value
        const titleValue = title;
        const newOrder = {
            userName : userNameValue,
            email: emailValue,
            address: addressValue,
            password: passValue,
            orderTitle: titleValue,
            price: price,
            days: days,
            img:img,
            status: 'pending'

    }
        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers :{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccessMsg('Order Placed. You will be Notified When the Order is Approved  ')
                setTimeout(()=>{
                    setSuccessMsg('')
                },3000)
            }
        })
    }
    return (
        <div className='place-order'>
            <h1>Place Order</h1>



            <div className="place-order-form-container">



                <Form onSubmit={handlePlaceOrder} className='place-order-form'>

                    <Form.Group className="mb-3 input" controlId="formBasicEmail">
                        
                        <Form.Control
                        ref={userNameRef} value={displayName || ''} type="text" placeholder="Enter Name" />
                        
                    </Form.Group>
                    <Form.Group className="mb-3 input" controlId="formBasicEmail">
                       
                        <Form.Control ref={emailRef} value={email || ''} type="email" placeholder="Enter email" />
                        
                    </Form.Group>
                    <Form.Group className="mb-3 input" controlId="formBasicEmail">
                       
                        <Form.Control ref={addressRef}   type="text" placeholder="Enter Address" />
                        
                    </Form.Group>



                    <Form.Group className="mb-3 input" 
                    controlId="formBasicPassword">

                       
                        <Form.Control ref={passRef} type="password" placeholder="Password" />

                    </Form.Group>

                        <p style={{color:'green'}}>{successMsg}</p>

                    <Button  className='card-btn' variant="primary" type="submit">
                        Place Order
  </Button>
                </Form>



            </div>
        </div>
    );
};

export default PlaceOrder;