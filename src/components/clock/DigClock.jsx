import React from 'react';
import './Clock.scss';


class DigClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        h: new Date().getHours(),
        m: new Date().getMinutes(),
        s: new Date().getSeconds(),
        ...this.props
      }
    }
    
    componentDidMount() {
      setInterval(
        () => this.tick(),
        1000
      );
      console.log(this.state);
      
    }
  
    tick() {
      this.setState({
        h: new Date().getHours().toLocaleString(),
        m: new Date().getMinutes().toLocaleString(),
      });
    }
    formatHour(hour) {
    if (hour > 12){
      return (hour-12);
    } else if (hour === 0){
        return (hour + 12);
      } 
    else {
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

    render() {
      return (
        <p className='AppClock'>
          {this.formatHour(this.hour)}:{this.formatMinute(this.minute)}
        </p>
      )
    }
  }

export default DigClock;