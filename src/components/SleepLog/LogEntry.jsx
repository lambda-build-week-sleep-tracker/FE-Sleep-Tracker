import React from 'react';


const LogEntry = (props) => {
    console.log(props); 
    const start = new Date(props.logState.sleep_start).toLocaleTimeString();
    const end = new Date(props.logState.sleep_end).toLocaleTimeString(); 
    const msSlept = props.logState.sleep_end - props.logState.sleep_start
    const hrsSlept = msSlept / (1000 * 60 * 60); 

    return ( 
        <>
            <div className="time-wrapper">
                <div className="time-field">{start}</div>
                <hr className="time-splitter"/>
                <div className="time-field">{end}</div>
                <div className="hoursSlept" onClick={props.displayEditModal}>
                {Math.floor(hrsSlept)}<br/>Hrs
                </div>
            </div>
        </>
    );
}
 
export default LogEntry;