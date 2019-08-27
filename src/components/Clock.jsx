import React, { Component } from 'react';

let time = new Date().toLocaleString();

class Clock extends React.Component {
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
          date: new Date().toLocaleString()
        });
      }

   render () {
       return (
           <p className='AppClock'>
               {time}
           </p>
       )
   } 
}

class ClockApp extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <Clock ></Clock>
        </div>
      );
    }
  }

export default ClockApp;