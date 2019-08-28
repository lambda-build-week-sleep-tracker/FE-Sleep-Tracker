import React from 'react';
import './nav.scss'

function Nav() {
    return (
        <div className='nav-container'>
            <h3>Sleep Tacker</h3>
            
            <nav>

                <a href="#" className="navlink">Sleep Schedule</a>
                <a href="#" className="navlink">Log Out</a>

            </nav>
        </div>
    )
}

export default Nav 