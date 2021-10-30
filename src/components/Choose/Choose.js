import React from 'react';
import './Choose.css'
const Choose = () => {
    return (
        <div className='choose-container'>
            <h1>Why Choose NPM</h1>

            <div className="choose-grid">
                <div className="choose-item">
                    <h3>TINY GROUPS</h3>
                    <p>Personalized experience on every tour with us. 5 Travelers per group maximum. Private tours are also available.</p>
                    <hr/>
                </div>
                <div className="choose-item">
                    <h3>LOWER PRICE</h3>
                    <p>Compared to any of your home operators. Book directly & cut the middleman. Save money, travel more.</p>
                    <hr/>
                </div>
                <div className="choose-item">
                    <h3>HIGHEST QUALITY</h3>
                    <p>350+ reviews & 5/5 rating on TripAdvisor. Awarded Certificate of Excellence in 2015, 2016, 2017, 2018 & 2019 consecutively.</p>
                    <hr/>
                </div>
                <div className="choose-item">
                    <h3>SCHEDULED TOURS</h3>
                    <p>Regularly scheduled tours. Suitable for solo travelers to join and reduce cost. Single Supplement also available.</p>
                    <hr/>
                </div>
                <div className="choose-item">
                    <h3>LOCAL EXPERIENCE</h3>
                    <p>Experienced local guides with vast local knowledge. Have an authentic local experience focusing on people & culture.</p>
                    <hr/>
                </div>
                <div className="choose-item">
                    <h3>LOCAL COMPANY</h3>
                    <p>100% Of your money spent goes directly to the locals. No commission to the foreign agencies online or offline.</p>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Choose;