import React, { Fragment, useState, useEffect } from 'react';

import './SleepLogModal.scss'; 
import axiosWithAuth from '../axiosWithAuth';

const SleepLogModal = ({ handleClose, logState, showModal}) => {

    const childID = localStorage.getItem('id'); 

    const [ clockTimes, setClockTimes ] = useState({
        id: childID, 
        sleep_end: '', 
        sleep_start: '',
        sleep_start_date: '',
        sleep_end_date: '',
      })

    const [ submitTimes, setSubmitTimes ] = useState({
        sleepEnd: null,
        sleepStart: null,
    })

    useEffect(() => {
        axiosWithAuth()
            .get(`https://sleeptracker-api.herokuapp.com/api/sleep/${childID}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .post(`https://sleeptracker-api.herokuapp.com/api/sleep`, clockTimes)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [submitTimes]);

    const handleChange = (e) => {
        setClockTimes({
            ...clockTimes,
            [e.target.name]: e.target.value,
        })
        console.log(clockTimes); 
        // setClockTimes({
        //     ...clockTimes,
        //     [e.target.name]: e.target.value
            
        // })
        // console.log(clockTimes)
    }

    async function handleForm(){
        await addNewItem(); 
        console.log('in handle form', submitTimes); 
        handleClose(); 
    }

    const addNewItem = () => {

        const startTime = new Date(`${clockTimes.sleep_start_date} ${clockTimes.sleep_start}`).getTime(); 
        const endTime = new Date(`${clockTimes.sleep_end_date} ${clockTimes.sleep_end}`).getTime(); 

        setSubmitTimes({
            startTime: startTime,
            endTime: endTime,
        })
        console.log(submitTimes); 
            // axiosWithAuth()
            //     .post(`https://sleeptracker-api.herokuapp.com/api/sleep`, clockTimes)
            //     .then(res => console.log(res))
            //     .catch(err => console.log(err)
        // handleClose(); 
        // console.log(clockTimes); 

    }




    console.log('LINE 72', submitTimes); 

    return ( 
        <div className='modal'>
            <section className="modal-main">
                <span onClick={handleClose}>❌</span>
                <h2>Add Time</h2>
                <form>
                    <label>Start Time
                        <input 
                        type="time"
                        name="sleep_start"
                        placeholder="Sleep Start"
                        value={clockTimes.sleep_start}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input 
                        type="date"
                        name="sleep_start_date"
                        value={clockTimes.sleep_start_date}
                        onChange={handleChange}
                        />                       
                    </label>
                    <label>End Time
                        <input 
                        type="time"
                        name="sleep_end"
                        placeholder='Sleep End'
                        value={clockTimes.sleep_end}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input 
                        type="date"
                        name="sleep_end_date"
                        value={clockTimes.sleep_end_date}
                        onChange={handleChange}
                        />
                    </label>
                    
                </form>
                <button onChange={handleChange} onClick={() => {
                    handleForm(); 
                    // handleClose(); 
                }}>Save</button>
            </section>
        </div>
     );
}
 
export default SleepLogModal;
