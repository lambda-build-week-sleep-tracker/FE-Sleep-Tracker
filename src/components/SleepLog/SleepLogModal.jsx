import React, { Fragment, useState, useEffect } from 'react';

import './SleepLogModal.scss'; 
import axiosWithAuth from '../axiosWithAuth';

const SleepLogModal = ({ handleClose, logState, showModal}) => {

    useEffect(() => {
        axiosWithAuth()
            .get('https://sleeptracker-api.herokuapp.com/api/sleep/')
    }, [])

    const addNewItem = () => {
        axiosWithAuth()
            .post(`https://sleeptracker-api.herokuapp.com/api/sleep/`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return ( 
        <div className='modal'>
            <section className="modal-main">
                <span onClick={handleClose}>❌</span>
                <h2>Add Time</h2>
                <form>
                    <label>Start Time
                        <input 
                        type="text"
                        name="startTime"
                        />
                    </label>
                    <label>End Time
                        <input 
                        type="text"
                        name="endTime"
                        />
                    </label>
                </form>
                <button onClick={() => {
                    addNewItem(); 
                    handleClose(); 
                }}>Save</button>
            </section>
        </div>
     );
}
 
export default SleepLogModal;
