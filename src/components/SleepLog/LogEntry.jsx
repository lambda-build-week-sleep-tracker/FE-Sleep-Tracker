import React from 'react';
import axiosWithAuth from '../axiosWithAuth';


const LogEntry = (props) => {

    const childID = localStorage.getItem('id')

    // console.log(props); 
    const start = new Date(props.logState.sleep_start).toLocaleTimeString();
    const end = new Date(props.logState.sleep_end).toLocaleTimeString(); 
    const msSlept = props.logState.sleep_end - props.logState.sleep_start
    const hrsSlept = msSlept / (1000 * 60 * 60); 

    const deleteEntry = () => {
        axiosWithAuth() 
            .delete(`https://sleeptracker-api.herokuapp.com/api/sleep/${childID}`)
            .then(res => console.log(res)) 
            .catch(err => console.log(err))
    }

    return ( 
        <>
            <div className="time-wrapper">
                <div className="time-field">{start}</div>
                <hr className="time-splitter"/>
                <div className="time-field">{end}</div>
                <div className="hoursSlept" onClick={deleteEntry}>
                {Math.floor(hrsSlept)}<br/>Hrs
                </div>
            </div>
        </>
    );
}
 
export default LogEntry;