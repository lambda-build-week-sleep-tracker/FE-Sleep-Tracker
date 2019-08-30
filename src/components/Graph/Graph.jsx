import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';
import 'react-vis/dist/style.css';
import './graph.scss';

function Graph() {
  const [sleepData, setSleepData] = useState([]);

  // TODO: Change the id to be dynamic based on localStorage
  useEffect(() => {
    axios
      .get('https://sleeptracker-api.herokuapp.com/api/sleep/1')
      .then(res => {
        setSleepData(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  let hoursPerSleepSession = sleepData.map(sleep => {
    let sleepMs = sleep.sleep_end - sleep.sleep_start;
    let sleepHours = sleepMs / (1000 * 3600);
    let date = new Date(sleep.sleep_end).toDateString();
    return { [date]: sleepHours };
  });

  let obj = {};
  hoursPerSleepSession.forEach(session => {
    let keys = Object.keys(session);
    let dateInt = new Date(keys[0]).getTime();
    if (!obj.hasOwnProperty(dateInt)) {
      obj[[dateInt]] = session[keys];
    }
  });

  let graphData = [];
  for (let prop in obj) {
    graphData.push({ x: Number(prop), y: obj[prop] });
  }

  return (
    <div>
      <XYPlot
        xType="time"
        width={600}
        height={400}
        // animation
        margin={{ left: 50 }}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Date" />
        <YAxis title="Hours" />
        <LineSeries data={graphData} />
      </XYPlot>
    </div>
  );
}

export default Graph;
