import React, { useEffect, useState } from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import './ManageOrders.css'
import Button from 'react-bootstrap/Button';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteOrder = (id) => {
        console.log(id)
        const url = `http://localhost:5000/orders/${id}`
        fetch(url,{
            method:'DELETE'
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining)
            }
        })
    }
    const approveOrder = (order,id) => {
        const url = `http://localhost:5000/orders/${id}`
        console.log(order)
        const approvedOrder = {
            address: order.address,
            days: order.days,
            email: order.email,
            img: order.img,
            orderTitle: order.orderTitle,
            password: order.password,
            price: order.price,
            status: 'Approved',
            userName: order.userName
        }

       


        // UPDATE
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approvedOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount> 0){
                console.log('approved')
                
            }
        })
    }
    return (
        <div className='manage-orders'>
            <h1>Manage Orders</h1>
            <div className="order-list">
                <ListGroup >

                    {
                        orders.map(item => <ListGroup.Item action variant="light">
                            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>{item.orderTitle}</Accordion.Header>
    <Accordion.Body>
    <ListGroup style={{textAlign: 'left'}}>
  <ListGroup.Item>Name: {item.userName}</ListGroup.Item>
  <ListGroup.Item>Email: {item.email}</ListGroup.Item>
  <ListGroup.Item>Price: {item.price}$</ListGroup.Item>
  <ListGroup.Item>Days: {item.days}</ListGroup.Item>
  <ListGroup.Item>Status: {item.status}</ListGroup.Item>
  <ListGroup.Item>


  <Button onClick={()=> approveOrder(item,item._id)}  className='card-btn'variant="primary"
  >Approve Order</Button>
      <Button onClick={()=>deleteOrder(item._id)} style={{marginLeft:'20px',}}  variant="danger"
  >Delete Order</Button>


  </ListGroup.Item>
</ListGroup>
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>
                        </ListGroup.Item>)
                    }

                </ListGroup>
            </div>


        </div>
    );
};

export default ManageOrders;