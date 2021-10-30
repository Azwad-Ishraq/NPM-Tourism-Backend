import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SinglePackage from '../SinglePackage/SinglePackage';

import './TourPackages.css'
const TourPackages = () => {
  const toggleSpinner = (displayStyle) =>{
    document.getElementById('spinner').style.display = displayStyle;
  } 
  const [packages,setPackages] = useState([])
  useEffect(()=>{
    toggleSpinner('inline-block')
    fetch('http://localhost:5000/packages')
    .then(res => res.json())
    .then(data => {
      setPackages(data)
      toggleSpinner('none')
    })
  },[])
    return (
        <div id='tour-packages' className='tours-container'>
            <h1>Bangladesh Tour Packages</h1>
           <div className="tour-cards">
           <Spinner id='spinner' animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
            {
              packages.map(item => <SinglePackage package={item} ></SinglePackage>)
            }
 
           </div>
        </div>
    );
};

export default TourPackages;