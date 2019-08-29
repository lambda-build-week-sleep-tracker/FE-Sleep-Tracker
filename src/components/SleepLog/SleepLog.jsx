import React, { Fragment, useState, useEffect } from 'react'; 

// Component imports
import LogEntry from './LogEntry'; 

import './SleepLog.scss'; 
import axiosWithAuth from '../axiosWithAuth';
import uuid from 'uuid/v1';  

const SleepLog = () => {

    const [ logState, setLogState ] = useState({
        
        childName: "Georgia",
        timeArr: [
            {
                start: '8:30 PM',
                end: '7:00 AM',
                hoursSlept: 10.5,
                childName: "Georgia",
            },
            {
                start: '8:00 PM',
                end: '6:00 AM',
                hoursSlept: 10,
                childName: "Georgia"
            },
            {
                start: '5:30 PM',
                end: '9:00 AM',
                hoursSlept: 15.5,
                childName: "Georgia"
            },
            {
                start: '8:30 PM',
                end: '9:00 AM',
                hoursSlept: 11.5,
                childName: "Georgia"
            },
            {
                start: '8:00 PM',
                end: '8:00 AM',
                hoursSlept: 12,
                childName: "Georgia"
            },
            {
                start: '7:30 PM',
                end: '7:00 AM',
                hoursSlept: 11.5,
                childName: "Georgia"
            },
            {
                start: '6:30 PM',
                end: '9:00 AM',
                hoursSlept: 14.5,
                childName: "Georgia"
            },
            {
                start: '10:30 PM',
                end: '10:00 AM',
                hoursSlept: 11.5,
                childName: "Georgia"
            },
        ]
    })

    useEffect(() => {
        axiosWithAuth()
            .get('url here')
            .then(res => {
                setLogState([
                    ...logState,
                    res.data
                ])
            })
            .catch(err => console.log(err))
    }, [logState])

    const today = new Date(); 

    return ( 
        <div className="sleep-log">
            <div className="top-section">
                <p className="top-p">{`${logState.childName} has been asleep for `}<strong>1 hr 20 min</strong></p>
                <p className="bottom-p">She should be awake in <strong>4 hr</strong></p>
                <hr className="divider"/>
            </div>
            <h1>Sleep Log</h1>
            <div className="edit-btn-container">
                <button className="edit-btn">Edit</button>
            </div>
            {/* <LogEntry /> */}
            <div className="time-log">
                {logState.timeArr.map((time) => (
                    <LogEntry logState={time} key={uuid()}/>
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