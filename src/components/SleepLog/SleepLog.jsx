import React, { Fragment, useState, useEffect } from 'react'; 

// Component imports
import LogEntry from './LogEntry'; 

import './SleepLog.scss'; 
import axiosWithAuth from '../axiosWithAuth';
import uuid from 'uuid/v1';  
import SleepLogModal from './SleepLogModal.jsx';

const SleepLog = () => {

    const [ logState, setLogState ] = useState()
    const [ showModal, setShowModal ] = useState(false)

    useEffect(() => {
        axiosWithAuth()
            .get('https://sleeptracker-api.herokuapp.com/api/sleep/:id')
            .then(res => {
                setLogState([
                    ...logState,
                    res.data
                ])
            })
            .catch(err => console.log(err))
    }, [logState])


    const displayModal = () => {
        setShowModal(true)
        console.log(showModal)
    }

    const handleClose = () => {
        setShowModal(false)
        console.log(showModal)
    }


    const today = new Date(); 

    return ( 
        <div className="sleep-log">
            <p className="top-p">{`${logState.childName} has been asleep for `}<strong>1 hr 20 min</strong></p>
            <p className="bottom-p">She should be awake in <strong>4 hr</strong></p>
            <hr className="divider"/>
            <h1>Sleep Log</h1>
            <div className='search-add'>
                {/* <input type="text" placeholder="Search"/> */}
                {showModal ? <SleepLogModal showModal={showModal} logState={logState} handleClose={handleClose} /> : null}
                {/* <SleepLogModal show={showModal} handleClose={handleClose} /> */}
                <button className="add-time" onClick={displayModal}>Add new time</button>
            </div>
            {/* <LogEntry /> */}
            <div className="time-log">
                {logState.timeArr.map((time) => (
                    <LogEntry logState={time} key={uuid()}/>
                ))}
            </div>
            <hr className="divider"/>
            <div className="date-block">
                {`${String(today.getMonth())}/${String(today.getDate())}/${String(today.getFullYear())}`}
            </div>

        </div>
     );
}
 
export default SleepLog;