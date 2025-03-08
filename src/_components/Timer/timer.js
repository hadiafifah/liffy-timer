import React, { useState, useEffect, useRef } from "react";
import './timer.css'

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 min
  const intervalRef = useRef(null); // Holds the timer reference

  // Format timer as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Start Timer Function
  const startTimer = () => {
    if (!intervalRef.current) {
        //setInterval runs a function thats calling setTimeLeft every 1000ms (1s)
        //whatever setTimeLeft returns, timeLeft is updated to that value.
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            alert("Time's up!");
            return 1500;
          }
          return prevTime - 1;
        });
      }, 
      1000);
    }
  };

  // Stop Timer Function
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Reset Timer Function
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(1500);
  };

  // Cleanup interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
    <div className="main-wrapper">
      <div className="button-wrapper-top">
        <button onClick={resetTimer}>Pomodoro</button>
        <button onClick={() => setTimeLeft(300)}>Rest</button>
      </div>
      <img src="/assets/icondraft.png" alt="liffy icon" className="icon"></img>
      <p className="timer">{formatTime(timeLeft)}</p>
      <div className="button-wrapper-bottom">
        <button onClick={stopTimer} className="icon-button-wrapper"><img src="/assets/greenpausebutton.svg" alt="pause button" className="icon-button"/></button>
        <button onClick={startTimer} className="icon-button-wrapper"><img src="/assets/greenplaybutton.svg" alt="play button" className="icon-button"/></button>
      </div>
    </div>
    </>
    
  );
}