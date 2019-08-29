import React, { Component } from 'react';
import './Clock.scss';
import axios from 'axios';
import DigClock from './DigClock'

// Digital Clock
// let time = new Date().toLocaleString();  

let startTime = [];
let timerEnd = [];
// let timerTotal = [];

class ClockApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hour: new Date().getHours().toLocaleString(),
      // minute: new Date().getMinutes().toLocaleString(),
      startTime: null,
      endTime: null
    }
  }

  formatHour(hour) {
    if (hour > 12){
      return (hour-12);
    } else if (hour === 0){
      return (hour + 12);
    } else {
      return (hour);
    }
  }
  
  formatMinute(minute) {
    if (minute < 10){
      return ("0"+minute);
    }
    else {
      return (minute);
    }
  }

  startTimer() {
    let hour = new Date().getHours().toLocaleString();
    let minute = new Date().getMinutes().toLocaleString();
    this.setState({
      startTime:`${this.formatHour(hour)}:${this.formatMinute(minute)}`
    });
    console.log(this.state.startTime);
    
  }
  
  endTimer(obj) {
    let hour = new Date().getHours().toLocaleString();
    let minute = new Date().getMinutes().toLocaleString();
    this.setState({
      ...this.state,
      endTime:`${this.formatHour(hour)}:${this.formatMinute(minute)}`
  })
    // this.setState.endTime = `${hour}:${minute}`;
    console.log(this.setState.endTime);
    console.log(startTime);
    obj = timerEnd;
    return (obj);
  }
  
  logTimer(startTime, timerStop) {
    axios.post(`https://reqres.in/api/users/`, { startTime, timerStop })
      .then(res => {
        // this.setState.startTime;
        console.log(this.state)
        console.log(res.data);
      })
      .catch(err =>{
        console.log(err)
      })
  }
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
      }
    }
    
  render() {
    return (
      <div className="App">
        <div className="Row">
        <div className="Start">
          <h2>Start</h2>
          {/* <DigClock className="StartClock" /> */}
          <p>{this.state.startTime}</p>
        </div>
        <div className="Awake">
          <h2>Awake</h2>
          {/* <DigClock className="AwakeClock"/> */}
          <p>{this.state.endTime}</p>
        </div>
        </div>
        <DigClock props= {this.state} />
        
        <button className="StartTimer" onClick={() => this.startTimer()}>
          Start Sleep Timer
            </button>

        <button className="EndTimer" onClick={() => 
          this.endTimer()
        }>
          End Sleep Timer
          </button>

        <button className="LogTime" onClick={() => 
        this.state.logTimer(this.state.startTime, this.state.endTime)
        }>
          Log Sleep Time
          </button>


      </div>
    );
  }
}

export default ClockApp;