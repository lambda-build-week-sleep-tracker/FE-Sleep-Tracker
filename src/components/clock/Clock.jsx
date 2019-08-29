import React, { Component, useState } from 'react';
import './Clock.scss';
import axios from 'axios';

// Digital Clock
// let time = new Date().toLocaleString();  

let timerStart = [];
let timerEnd = [];
// let timerTotal = [];

class DigClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().getHours().toLocaleString(),
      minute: new Date().getMinutes().toLocaleString(),
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      hour: new Date().getHours().toLocaleString(),
      minute: new Date().getMinutes().toLocaleString()
    });
  }

  render() {
    return (
      <p className='AppClock'>
        {this.state.hour}:{this.state.minute}
      </p>
    )
  }
}


function startTimer(obj) {
  let hour = new Date().getHours().toLocaleString();
  let minute = new Date().getMinutes().toLocaleString();
  timerStart = `${hour}:${minute}`;
  console.log(timerStart);
  obj = timerStart;
  return (obj);
}

function endTimer(obj) {
  let hour = new Date().getHours().toLocaleString();
  let minute = new Date().getMinutes().toLocaleString();
  timerEnd = `${hour}:${minute}`;
  console.log(timerEnd);
  console.log(timerStart);
  obj = timerEnd;
  return (obj);
}

function logTimer(obj1, obj2) {
  axios.post(`https://reqres.in/api/users/`, { obj1, obj2 })
    .then(res => {
      console.log(res.data);
    })
}

class ClockApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      endTime: null
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Row">
        <div className="Start">
          <h2>Start</h2>
          <DigClock className="StartClock" />
        </div>
        <div className="Awake">
          <h2>Awake</h2>
          <DigClock className="AwakeClock"/>
        </div>
        </div>
        <DigClock />
        
        <button className="StartTimer" onClick={() =>
          startTimer(this.state.startTime)
        }>
          Start Sleep Timer
            </button>

        <button className="EndTimer" onClick={() => endTimer(this.state.endTime)
        }>
          End Sleep Timer
          </button>

        <button className="LogTime" onClick={() => logTimer(this.state.startTime, this.state.endTime)
        }>
          Log Sleep Time
          </button>


      </div>
    );
  }
}

export default ClockApp;