import React from 'react';
import './style.css';

const Buttons = ({ isRunning, setIsRunning, time,setTime, setLapTimes }) => {
  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime({ ms: 0, s: 0, m: 0 });
    setLapTimes([]);
  };
 
  const handleLap = () => {
    setLapTimes((prevLapTimes) => [...prevLapTimes, { ...time }]);
  };

  return (
    <div className="buttons">
      {isRunning ? <button onClick={stopTimer}>STOP</button> : <button onClick={startTimer}>START</button>}
      <button onClick={handleLap}>LAP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
};

export default Buttons;
