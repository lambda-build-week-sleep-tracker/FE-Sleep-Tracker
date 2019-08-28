import React, { Fragment } from 'react';

//importing styling
import './LogEntry.scss'

const LogEntry = (props) => {
    
    return ( 
        <div className="log-block-container">
            <div className="log-block">
                <input placeholder="Start Time" />
                <hr className="time-splitter"/>
                <input placeholder="End Time"/>
            </div>
        </div>
    );
}
 
export default LogEntry;