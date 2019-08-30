import React from 'react';
import './nav.scss'
import { Link } from 'react-router-dom'; 

function Nav(props) {

    const logout = () => {
        localStorage.removeItem('token'); 
        props.props.history.push('/'); 
    }
    return (
        <div className='nav-container'>
            <h3>Sleep Tacker</h3>
            
            <nav>
                <Link to='/timer' className='navlink'>Sleep Timer</Link>
                <Link to='/sleeplog' className="navlink">Sleep Log</Link>
                <a className="navlink" onClick={logout}>Log Out</a>
            </nav>
        </div>
    )
}

export default Nav 