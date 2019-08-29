import React, { Component, useState } from 'react';
import './Clock.scss';
import axios from 'axios';

class ClockApp extends Component {
  state ={
		startTime: null,
		endTime: null,
		h: new Date().getHours(),
		m: new Date().getMinutes(),
		session: "AM",
		dm: null
	}

	showTime() {

		// Check for midnight
		if(this.state.h === 0){
			this.setState({...this.state, h: 12})
		}

		if (this.state.h > 12){

			// Check if the time is in the afternoon
			this.setState({...this.state, h: (this.state.h - 12), session: "PM"})
		}

		// if(this.state.h < 10 ){

		// }

		let time = `${this.state.h}:${this.state.m}`
		
		this.setState({...this.state, dm: time})

	}

	startTime(){

		// Hour is set to let bc it is subject to change
		let currentHour = new Date().getHours()
		const currentMinute = new Date().getMinutes()

		// Check for midnight, if so change the time to 12
		if(currentHour === 0){
			currentHour = 12
		}

		this.setState({...this.state, startTime: `${currentHour}:${currentMinute}`})

	}

  render() {
    return (
      <div className="time-container">
        <div className="Row">
        <div className="Start">
          <h2>Start Time</h2>
					<p>{this.state.startTime}</p>
        </div>
        <div className="Awake">
          <h2>Awake Time</h2>

        </div>
			</div>
         
        <button className="StartTimer" onClick={() => this.startTime()}>
					Start Sleep Timer
				</button>
{/* 
//         <button className="EndTimer" onClick={() => endTimer(this.state.endTime)
//         }>
//           End Sleep Timer
//           </button>

//         <button className="LogTime" onClick={() => logTimer(this.state.startTime, this.state.endTime)
//         }>
//           Log Sleep Time
//           </button> */}


      </div>
    );
  }
}

export default ClockApp;