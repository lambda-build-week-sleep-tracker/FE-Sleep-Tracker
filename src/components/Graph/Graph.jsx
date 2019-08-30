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

// Can't figure out how to make the graph responsive through the
// react-vis documentation so let's use window.innerWidth to set the graph width
function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });
  return { width };
}

function Graph() {
  const [sleepData, setSleepData] = useState([]);
  const { width } = useWindowDimensions();

  // graphWidth is the smaller of 700px or 100% width
  let graphWidth, graphHeight;
  if (width > 740) {
    graphWidth = 700;
    graphHeight = 700 / 1.5;
  } else {
    graphWidth = width;
    graphHeight = graphWidth / 1.5;
  }

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
    <div className="graph" style={{ width: width }}>
      <XYPlot
        xType="time"
        width={graphWidth}
        height={graphHeight}
        // animation
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Date" tickTotal={8} />
        <YAxis title="Hours" />
        <LineSeries data={graphData} />
      </XYPlot>
    </div>
  );
}

export default Graph;
