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
class DigClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
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
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <p className='AppClock'>
        {this.state.time}
      </p>
    )
  }
}

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
        <button class="StartTimer">Start Sleep Timer</button>
        <button class="EndTimer">End Sleep Timer</button>
        <button class="LogTimer">Log Sleep Time</button>

        {/* VVVVV This is for the analog VVVVV */}
        {/* <Clock value={this.state.date}/> */}

      </div>
    );
  }
}
//  
export default ClockApp;