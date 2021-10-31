import React from 'react';
import img from '../../notfound.svg'
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='notfound'>
            <h1>Oops 404!</h1>
            <h2>Page Not Fond</h2>
            <img src={img} alt=""/>
        </div>
    );
};

export default Notfound;