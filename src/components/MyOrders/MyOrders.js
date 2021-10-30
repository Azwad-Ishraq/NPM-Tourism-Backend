import React, { useEffect, useState } from 'react';
import { Accordion, Button, ListGroup } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const { displayName, email } = user
    console.log(user)
    useEffect(() => {
        fetch(`https://secret-waters-06679.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [])
    const handleDelete = (id) => {
        //  eslint-disable-next-line no-restricted-globals
      const isConfirm =   confirm('Ar You Sure You Want To Remove Order')
      if(isConfirm){
        const url = `https://secret-waters-06679.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
      }

        

    }
    return (
        <div className
            ='myOrders'>
           <h1>Order Summery</h1>

            <div className="my-order-body">
            <div className="order-list">
                <ListGroup className='order-list-items'>

                    {
                        orders.map(item =>
                            <ListGroup.Item className='list-item' action variant="light">


                                <Accordion style={{ width: '80%' }}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{item.orderTitle}</Accordion.Header>
                                        <Accordion.Body className='my-order-details-body'>
                                            <h3>Price:{item.price}$</h3>
                                            <p>Days: {item.days}</p>
                                            <p style={{ color: '#2ecc71' }}>{item.status}....</p>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                                <Button onClick={() => handleDelete(item._id)} className='card-btn my-order-btn' variant="primary">Cancel Order</Button>
                            </ListGroup.Item>)

                    }


                </ListGroup>
            </div>
           <div className="user-info-container">
           
            <li>Name: {displayName}</li>
            <li>Email: {email}</li>
           </div>
            </div>
        </div>
    );
};

export default MyOrders;