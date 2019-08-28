import React, { Fragment } from 'react'; 

// Component imports
import LogEntry from './LogEntry'; 

import './SleepLog.scss'; 

const SleepLog = () => {

    const timeArr = [
        {
            start: '8:30',
            end: '7:00'
        },
        {
            start: '8:00',
            end: '6:00'
        },
        {
            start: '5:30',
            end: '9:00'
        },
        {
            start: '8:30',
            end: '9:00'
        },
        {
            start: '8:00',
            end: '8:00'
        },
        {
            start: '7:30',
            end: '7:00'
        },
        {
            start: '6:30',
            end: '9:00'
        },
        {
            start: '10:30',
            end: '10:00'
        },

    ]

    const today = new Date(); 

    return ( 
        <div className="sleep-log">
            <div className="top-section">
                <p className="top-p">nameVariable has been asleep for <strong>1 hr 20 min</strong></p>
                <p className="bottom-p">She should be awake in <strong>4 hr</strong></p>
                <hr className="divider"/>
            </div>
            <h1>Sleep Log</h1>
            <div className="edit-btn-container">
                <button className="edit-btn">Edit</button>
            </div>
            {/* <LogEntry /> */}
            <div className="time-log">
                {timeArr.map((time) => (
                    <LogEntry startTime={time.start} endTime={time.end}/>
                ))}
            </div>
            <div>
                <input type="text" placeholder="Search"/>
                <button className="add-time">Add new time</button>
            </div>
            <hr className="divider"/>
            <div className="date-block">
                {`${String(today.getMonth())}/${String(today.getDate())}/${String(today.getFullYear())}`}
            </div>

        </div>
     );
}
 
export default SleepLog;