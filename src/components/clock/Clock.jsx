import React, { Component } from 'react';
import './Clock.scss';
import axiosWithAuth from '../axiosWithAuth';

class ClockApp extends Component {
  state ={
		startTime: null,
		endTime: null,
		h: null,
		m: null,
		dh: null,
		dm: null,
    session: "AM",
    displayStart: '--:--',
    displayAwake:'--:--',
    key: null
	}

	componentDidMount(){
    this.setState({...this.state, key: localStorage.getItem("id")})
		setInterval(() => {
			this.setState({...this.state, h: new Date().getHours(), m: new Date().getMinutes()})
      // console.log(this.state.mood)
      
			setInterval(this.showTime(), 1000)
    }, 1000);
    // this.displayTime();
	}


	showTime() {
		
		// Check for midnight
		if(this.state.h === 0){
			this.setState({...this.state, dh: 12})
		}
		else{
			this.setState({...this.state, dh: this.state.h})
		}

		if (this.state.h > 12){
			// Check if the time is in the afternoon
			this.setState({...this.state, dh: (this.state.h - 12), session: "PM"})
		}

		if(this.state.m < 10){
			this.setState({...this.state, dm: `0${this.state.m}`});
		}
		else{
			this.setState({...this.state, dm: this.state.m})
		}

	}

	 getCurrentStartTime=() => {

		let currentTime = new Date().getTime()

		this.setState({...this.state, ["startTime"]: currentTime})

	}

  getCurrentEndTime=() => {

		let currentTime = new Date().getTime()

		this.setState({...this.state, ["endTime"]: currentTime})

	}

  displayStartTime=()=>{
    let displayHour = new Date().getHours()
		let displayMinute = new Date().getMinutes()

    		// Check for midnight, if so change the time to 12
		if(displayHour === 0){
			displayHour = 12
    }
    if (displayHour > 12){
			// Check if the time is in the afternoon
			displayHour = displayHour - 12
    }
    if (displayMinute < 10){
			// Check if the minute is under 10 and add a 0
			displayMinute = ("0"+displayMinute)
    }
    this.setState({...this.state, ["displayStart"]: `${displayHour}:${displayMinute}`});
  }

  displayEndTime=()=>{
    let displayHour = new Date().getHours()
		let displayMinute = new Date().getMinutes()

    		// Check for midnight, if so change the time to 12
		if(displayHour === 0){
			displayHour = 12
    }
    if (displayHour > 12){
			// Check if the time is in the afternoon
			displayHour = displayHour - 12
    }
    if (displayMinute < 10){
			// Check if the minute is under 10 and add a 0
			displayMinute = ("0"+displayMinute)
    }

    this.setState({...this.state, ["displayAwake"]: `${displayHour}:${displayMinute}`});
  }

  async startTimeHandler(){
    await this.displayStartTime();
    this.getCurrentStartTime()
  }

  async awakeTimeHandler(){
    await this.displayEndTime();
    this.getCurrentEndTime()
  }

  logTime(key, start, stop){
    axiosWithAuth()
    .post("https://sleeptracker-api.herokuapp.com/api/sleep/", {key, start, stop})
    .then(res => {
      console.log(res.data);
      
    })
    .catch(err => console.log(err))
}
  

  render() {
    return (
      <div className="time-container">
        <div className="Row">
        <div className="Start">
          <h2>Start Time</h2>
					<p>{this.state.displayStart}</p>
        </div>
        <div className="Awake">
          <h2>Awake Time</h2>
					<p>{this.state.displayAwake}</p>
        </div>
        </div>
				<div className="timer">
					{`${this.state.dh}:${this.state.dm}`}
				</div>

         
				<button className="StartTimer" name="startTime" onClick={() => this.startTimeHandler()} >
					Start Sleep Timer
				</button>
 
				<button className="EndTimer" name="endTime" onClick={() => this.awakeTimeHandler()}>
         	End Sleep Timer
				</button>

        <button className="LogTime"  onClick={() => this.logTime(this.key, this.startTime, this.endTime)}>
          Log Sleep Time
         </button>

      </div>
    );
  }
}

export default ClockApp;