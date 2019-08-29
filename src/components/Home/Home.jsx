import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div className="home">
            <div>Log Sleep Time</div>
            <Link to='/sleeplog'>My Sleep Log</Link>
            <a href="">Suggested Sleep Schedule</a>
            <div className="graph-container">
                <input type="text"/>
                <div>Graph placeholder</div>
            </div>
        </div>
    )
}

export default Home