import React, { Component } from 'react';
// import Clock from 'react-clock'

// // Analog Clock (Does not work)
// class AnaClock extends React.Component {
//     state = {
//       date: new Date(),
//     }

//     componentDidMount() {
//       setInterval(
//         () => this.setState({ date: new Date() }),
//         1000
//       );
//     }}

// Digital Clock
// let time = new Date().toLocaleString();  
let timerStart = [];
let timerEnd = [];
let timerTotal = [];

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


function timer(a,b) {
  return (b - a)
}

function startTimer() {
  let hour= new Date().getHours().toLocaleString();
  let minute= new Date().getMinutes().toLocaleString();
  timerStart = `${hour}:${minute}`;
  console.log(timerStart);
  return timerStart;
}

function endTimer(){
  let hour= new Date().getHours().toLocaleString();
  let minute= new Date().getMinutes().toLocaleString();
  timerEnd = `${hour}:${minute}`;
  console.log(timerEnd);

  timerTotal = timer(timerStart, timerEnd);
  return timerTotal;
}

// logTime = () => {

// }

class ClockApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="Start">
          <h2>Start</h2>
          <DigClock class="StartClock"/>
        </div>
        <div className="Awake">
          <h2>Awake</h2>
        </div>
        <DigClock />
        <button className="StartTimer" onClick={startTimer()}>Start Sleep Timer</button>
        <button className="EndTimer" onClick={endTimer()}>End Sleep Timer</button>
        <button className="LogTime" onClick={this.logTime}>Log Sleep Time</button>

        {/* VVVVV This is for the analog VVVVV */}
        {/* <Clock value={this.state.date}/> */}

      </div>
    );
  }
}
//  
export default ClockApp;