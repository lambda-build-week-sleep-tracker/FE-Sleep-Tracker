import React from 'react'
import './home.scss'

function Home() {
    return (
        <div className="home">
            <div>Log Sleep Time</div>
            <a href="">View Sleep Log</a>
            <a href="">Suggested Sleep Schedule</a>
            <div className="graph-container">
                <input type="text"/>
                <div>Graph placeholder</div>
            </div>
        </div>
    )
}

export default Home