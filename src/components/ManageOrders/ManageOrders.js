import React, { useEffect, useState } from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import './ManageOrders.css'
import Button from 'react-bootstrap/Button';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    
    
    useEffect(() => {
        fetch('https://secret-waters-06679.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteOrder = (id) => {
        console.log(id)
        //  eslint-disable-next-line no-restricted-globals
      const isConfirm =   confirm('Ar You Sure You Want To Remove Order')
      if(isConfirm){
        const url = `https://secret-waters-06679.herokuapp.com/orders/${id}`
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
        
    }
    const approveOrder = (order,id) => {
        const url = `https://secret-waters-06679.herokuapp.com/orders/${id}`
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
            <div className="manage-order-list">
                <ListGroup className='manage-order-list-grp' >

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
  <ListGroup.Item id='list-group-items-btns'>


  <Button onClick={()=> approveOrder(item,item._id)}  className='card-btn approve-btn'variant="primary"
  >Approve Order</Button>
      <Button className='delete-btn' onClick={()=>deleteOrder(item._id)}   variant="danger"
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