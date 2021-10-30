import React from 'react';
import { Form } from 'react-bootstrap';
import './Footer.css'
import Button from 'react-bootstrap/Button';
const Footer = () => {
    return (
        <footer className='footer'>
           <div className="footer-text">
           <h1>SUBCRIBE TO OUR NEWSLETTER</h1>
            <p>Get the latest report about the project and company profile..</p>
            <Form.Control style={{marginBottom:'20px'}} type="email" placeholder="Enter email" />
            <Button className='card-btn' variant="primary" type="submit">Subscribe</Button>
           </div>
           <div className="copyright">
               <p>© NPM Tourism 2021</p>
           </div>

        </footer>
    );
};

export default Footer;