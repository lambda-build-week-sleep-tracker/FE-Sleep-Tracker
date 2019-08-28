import React, { Fragment } from 'react';


const LogEntry = (props) => {
    
    return ( 
        <div className="log-block-container">
            <div className="log-block">
                <input placeholder="Start Time" 
                value={props.startTime}/>
                <hr className="time-splitter"/>
                <input placeholder="End Time"
                value={props.endTime} />
            </div>
        </div>
    );
}
 
export default LogEntry;