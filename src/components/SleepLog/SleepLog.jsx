import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// Component imports
import LogEntry from './LogEntry'; 

import './SleepLog.scss'; 
import axiosWithAuth from '../axiosWithAuth';
import uuid from 'uuid/v1';  
import SleepLogModal from './SleepLogModal.jsx';

const SleepLog = () => {

    const [ logState, setLogState ] = useState()
    const [ showModal, setShowModal ] = useState(false)
    const [ modalEditing, setModalEditing ] = useState(false); 
    const [ modalToEdit, setModalToEdit ] = useState(); 

    const childID = localStorage.getItem('id')

    useEffect(() => {
        axiosWithAuth()
            .get(`https://sleeptracker-api.herokuapp.com/api/sleep/${childID}`)
            .then(res => { 
                console.log(res.data); 
                setLogState(res.data)
                // console.log(res.data.data); 
            })
            .catch(err => console.log('check', err))
    }, [])


    const displayModal = () => {
        setShowModal(true)
        console.log(showModal)
    }

    const handleClose = () => {
        setShowModal(false)
        console.log(showModal)
    }

    const editModal = modal => {
        setModalEditing(true); 
        setModalToEdit(modal); 
    }

    // const saveEdit = () => {
    //     axiosWithAuth()
    //         .put(`https://sleeptracker-api.herokuapp.com/api/sleep/${modalToEdit.id}`, modalToEdit)
    //         .then(res => {
    //             handleClose(); 
    //             console.log(res)
    //         })
    // }


    const today = new Date();  

    if(!logState) {
        return (<h2>Loading...</h2>)
    }

    return ( 
        <div className="sleep-log">
            {/* <p className="top-p"> has been asleep for `}<strong>1 hr 20 min</strong></p> */}
            {/* <p className="bottom-p">She should be awake in <strong>4 hr</strong></p> */}
            <hr className="top-divider"/>
            <h1 className="header">Sleep Log</h1>
            <div className='search-add'>
                {/* <input type="text" placeholder="Search"/> */}
                {showModal ? <SleepLogModal showModal={showModal} logState={logState} handleClose={handleClose} /> : null}
                {/* <SleepLogModal show={showModal} handleClose={handleClose} /> */}
                <Link to='/timer'><button className="add-time">Add new time</button></Link>
            </div>
            {/* <LogEntry /> */}
            <div className="time-log">
                {logState.data.map((timeObj) => (
                    <LogEntry logState={timeObj} key={uuid()} handleClose={handleClose} displayModal={displayModal}/>
                ))}
            </div>
            <hr className="bottom-divider"/>
            <div className="date-block">
                {`${String(today.getMonth())}/${String(today.getDate())}/${String(today.getFullYear())}`}
            </div>

        </div>
     );
}
 
export default SleepLog;