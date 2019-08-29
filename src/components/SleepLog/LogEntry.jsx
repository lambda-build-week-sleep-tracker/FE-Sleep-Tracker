import React, { Fragment } from 'react';


const LogEntry = (props) => {
    // console.log(props); 
    return ( 
        <>
            <div className="time-wrapper">
                <div className="time-field">{props.logState.start}</div> 
                <hr className="time-splitter"/>
                <div className="time-field">{props.logState.end}</div>
                <div className="hoursSlept" onClick={() => console.log('div clicked')}>
                {props.logState.hoursSlept}<br/>Hrs
                </div>
            </div>
        </>
    );
}
 
export default LogEntry;