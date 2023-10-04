import { useState, useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Timer from './components/Timer';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };

          if (newTime.ms < 59) {
            newTime.ms++;
          } else {
            newTime.ms = 0;
            if (newTime.s < 59) {
                newTime.s++;
            } else {
                newTime.s = 0;
                newTime.m++;
            }
          }

          return newTime;
        });
      }, 20);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="container">
      <Timer time={time} />
      <Buttons
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setLapTimes={setLapTimes}
        setTime={setTime}
        time={time}
      />
      <div className='score'>
        {lapTimes.map((lapTime, index) => (
          <span key={index}>
            {`${lapTime.m} : ${lapTime.s} : ${lapTime.ms}`}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
