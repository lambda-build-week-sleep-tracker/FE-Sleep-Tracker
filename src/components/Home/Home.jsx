import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'; 
import Graph from '../Graph/Graph'

function Home() {
    return (
        <div className="home">
            <div className='log-time'>Log New Sleep Time</div>
            <Link to='/sleeplog'>My Sleep Log</Link>
            {/* <a href="">Suggested Sleep Schedule</a> */}
            <div className="graph-container">
                {/* <input type="text"/> */}
                <Graph />
            </div>
        </div>
    )
}

export default Home