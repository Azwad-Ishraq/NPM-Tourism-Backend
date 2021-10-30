import React from 'react';
import './Award.css'
const Award = () => {
    return (
        <div className='award-container'>
               <div className="award-imgs">
                    <img src="https://nijhoom.b-cdn.net/wp-content/uploads/images/trip-advisor/2019-hall-of-fame-nijhoom-tours-306x280-o.png" alt=""/>
                    <img src="https://nijhoom.b-cdn.net/wp-content/uploads/images/trip-advisor/2020-travelers-choice-nijhoom-tours-306x360-o.png" alt=""/>
                    <img src="https://nijhoom.b-cdn.net/wp-content/uploads/images/trip-advisor/review-count-custom-widget-306-o.png" 
                    alt=""/>
                    <img src="https://nijhoom.b-cdn.net/wp-content/uploads/images/trip-advisor/itn-featured-nijhoom-tours-306x190-o.png" alt=""/>

               </div>
               <div className="award-text">
                   <h1>A multi-award-winning local tour operator in Bangladesh</h1>
                   <p>NPM Tours is a multi-award-winning local tour operator in Bangladesh specializing in organizing tours in Bangladesh for seasoned western travelers. We organize 1-28 days tours in Bangladesh with a tiny group of 2-5 travelers only.</p>
                   <p>Nijhoom Tours is the winner of the <span>TripAdvisor Hall of Fame 2019 award</span> - the first and only one in Bangladesh! We've awarded this for earning the  <span>TripAdvisor Certificate of Excellence</span>  last five years consecutively <span>in 2015, 2016, 2017, 2018, and 2019</span> , based on our clients' ratings.</p>
                  <p>We had also earned the  <span>TripAdvisor Travelers Choice Award in 2020</span> . You can expect only the highest quality service from us. We have <span>350+ reviews on TripAdvisor</span>  from our clients.</p>
                  <p>For being a home-grown local operator, our prices will be less than half than any foreign operator can offer since we do not need to pay any middlemen. All the money you pay goes directly to the locals. By directly booking with us, you are also supporting a local small business and making the almost non-existing tourism sector in Bangladesh a little more sustainable.</p>
                  <p>Visit Bangladesh with us for an unforgettable experience. Our knowledgeable and experienced guides will provide you an experience of a different Bangladesh than you thought you knew about! <span>We regularly attend big travel shows in London</span> . You can meet us there too before you travel to Bangladesh.</p>
                  <p>Start planning your dream holiday now. We are looking forward to seeing you in Bangladesh soon! Stay safe until then!</p>
               </div>
        </div>
    );
};

export default Award;