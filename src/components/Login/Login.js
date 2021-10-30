import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import Button from 'react-bootstrap/Button';
import useAuth from '../../hooks/useAuth'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const {signInUsingGoogle} = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home'

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
    .then(result => {
      history.push(redirect_uri)
    })
  }
    return (
        <div className='login'>
          <h1>Please Login</h1>
            <Form onSubmit={(e)=> e.preventDefault()} className='login-form'>
  <Form.Group className="mb-3 form-input" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 form-input" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <span>
  <Button style={{marginRight: '20px'}} className='card-btn' variant="primary" type="submit">
    Sign In
  </Button>
  <Button onClick={handleGoogleSignIn} className='card-btn' variant="primary" type="submit">
    Sign In Using Google
  </Button>
  </span>
</Form>
        </div>
    );
};

export default Login;