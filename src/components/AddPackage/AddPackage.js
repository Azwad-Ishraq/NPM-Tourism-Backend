
import React, { useRef, useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import './AddPackage.css'
const AddPackage = () => {
    const titleRef = useRef()
    const imgRef = useRef()
    const priceRef = useRef()
    const daysRef = useRef()
    const [sucessMsg,setSuccessMsg] = useState('');

    const handleAddPackage = (e) => {
        
        e.preventDefault()
        const titleValue = titleRef.current.value
        const imgValue = imgRef.current.value;
        const priceValue = priceRef.current.value
        const daysValue = daysRef.current.value;
        const newPackage = {
            title: titleValue,
            img: imgValue,
            price: priceValue,
            days: daysValue
        }
        fetch(`https://secret-waters-06679.herokuapp.com/packages`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                e.target.reset()
                setSuccessMsg('Package Added Successfully')
                setTimeout(()=>{
                    setSuccessMsg('')
                },2000)
            }
        })
    }
    return (
        <div className='add-package'>
            <h1>Add a New Tour Package</h1>
            <div className="add-package-form-container">
            <Form onSubmit={handleAddPackage} className='add-package-form'>
  <Form.Group className="mb-3 input" controlId="formBasicEmail">
    
    <Form.Control ref={titleRef} type="text" placeholder="Title" />
   
  </Form.Group>

  <Form.Group className="mb-3 input" controlId="formBasicPassword">
    
    <Form.Control ref={imgRef} type="text" placeholder="Image Link" />
  </Form.Group>
  <Form.Group className="mb-3 input" controlId="formBasicPassword">
    
    <Form.Control ref={priceRef} type="text" placeholder="Price" />
  </Form.Group>
  <Form.Group className="mb-3 input" controlId="formBasicPassword">
    
    <Form.Control ref={daysRef} type="text" placeholder="Days" />
  </Form.Group>
    <p style={{color: '#2ecc71'}}>{sucessMsg}</p>
  <Button className='card-btn' variant="primary" type="submit">
    Add
  </Button>
</Form>
            </div>
        </div>
    );
};

export default AddPackage;