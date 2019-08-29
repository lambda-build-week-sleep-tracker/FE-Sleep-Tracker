import React, { Fragment } from 'react';


const LogEntry = (props) => {
    console.log(props); 
    return ( 
        <div className="log-block-container">
            <div className="log-block">
                <input placeholder="Start Time" 
                value={props.logState.start}/>
                <hr className="time-splitter"/>
                <input placeholder="End Time"
                value={props.logState.end} />
            </div>
        </div>
    );
}
 
export default LogEntry;