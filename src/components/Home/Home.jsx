import React, {useState} from 'react'
import './home.scss'
import { Link } from 'react-router-dom'; 
import Graph from '../Graph/Graph'

function Home() {
    
    const [childName, setChildName] = useState(localStorage.getItem(childObj.child_name))
    
    return (
        <div className="home">
            <div className='log-time'>Log New Sleep Time</div>
            <Link to='/sleeplog'>My Sleep Log</Link>
            <p>{`${childName}' Tends to be in the best mood when they have slept for about 10hrs`}</p>
            <div className="graph-container">
                {/* <input type="text"/> */}
                <Graph />
            </div>
        </div>
    )
}

export default Home