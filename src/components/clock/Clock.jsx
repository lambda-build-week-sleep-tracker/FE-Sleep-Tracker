import React, { Component } from 'react';
import './Clock.scss';
import axiosWithAuth from '../axiosWithAuth';

class ClockApp extends Component {
  state ={
    id: null,
		sleep_start: null,
		sleep_end: null,
		h: null,
		m: null,
		dh: null,
		dm: null,
    session: "AM",
    displayStart: '--:--',
    displayAwake:'--:--'
	}

	componentDidMount(){
    this.setState({...this.state, id: localStorage.getItem("id")})
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

	 getCurrentsleep_start=() => {

		let currentTime = new Date().getTime()

		this.setState({...this.state, ["sleep_start"]: currentTime})

	}

  getCurrentsleep_end=() => {

		let currentTime = new Date().getTime()

		this.setState({...this.state, ["sleep_end"]: currentTime})

	}

  displaysleep_start=()=>{
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

  displaysleep_end=()=>{
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

  async sleep_startHandler(){
    await this.displaysleep_start();
    this.getCurrentsleep_start()
  }

  async awakeTimeHandler(){
    await this.displaysleep_end();
    this.getCurrentsleep_end()
  }

  logTime(id, start, stop){
    axiosWithAuth()
    .post("https://sleeptracker-api.herokuapp.com/api/sleep/", {id, start, stop})
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
					<p>{this.state.dt} {this.state.session}</p>
				</div>

         
				<button className="StartTimer" onClick={() => this.sleep_startHandler()} >
					Start Sleep Timer
				</button>
 
				<button className="EndTimer" onClick={() => this.awakeTimeHandler()}>
         	End Sleep Timer
				</button>

        <button className="LogTime"  onClick={() => this.logTime(this.id, this.sleep_start, this.sleep_end)}>
          Log Sleep Time
         </button>

      </div>
    );
  }
}

export default ClockApp;