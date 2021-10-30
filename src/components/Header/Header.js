import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
           <div className="header-text">
           <h1>Welcome To <span>Bangladesh</span></h1>
            <h2>An unspoiled land where you'll hardly meet another tourist</h2>
            <p>Bangladesh is a beautiful country in South Asia outside the tourism radar. Within it is primeval swamps full of man-eating tigers, the unseen relics of long-forgotten Buddhist kingdoms, lush and lurid tea plantations, tribal groups with Burmese faces, glorious beaches that stretch for eternity, freshwater dolphins and deep-water whales, and some of the most open-hearted people you'll ever meet.</p>
            <p>One of the least traveled destinations in the world, the only thing absent here is the tourists and the tourism scams. People will still invite you to their home anywhere you go and offer food and drinks, and will be happy to be their photos taken and never ask for money for that.</p>
            <p>Visit Bangladesh before the tourists arrive, where everything is still unspoiled!</p>
           </div>
        </div>
    );
};

export default Header;