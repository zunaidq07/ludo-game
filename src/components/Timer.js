import React, { useState, useEffect } from 'react'

export const Timer = () => {
    const timeLimit = 6
    const gameStart = true
    const startTimer = true
    const [seconds, setSeconds] = useState(6);
    const [isActive, setIsActive] = useState(false);
  
    const reset = () => {
      setSeconds(6);
    }
  
    useEffect(() => {
      let interval = null;
      if (startTimer) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } 
      if ( seconds == 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [seconds]);
    return (
        <div>
            <div className="time">
                {seconds}s
            </div>
            <div className="row">
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer
