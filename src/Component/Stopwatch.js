import React, { useState } from 'react'
import '../syles/Stopwatch.css'
function Stopwatch() {
    const [time, setTime] = useState({
        hr: 0,
        min: 0,
        sec: 0,
        millisec: 0
    });
    const [status, setStatus] = useState(null);
    let updateHr = time.hr;
    let updateMin = time.min;
    let updateSec = time.sec;
    let updateMilliSec = time.millisec;

    const handleStart = () => {
        myFun();
        setStatus(setInterval(myFun, 10));
    }
    const handleStop = () => {
        clearInterval(status);
    }
    const handleReset = () => {
        clearInterval(status);
        setTime({ hr: 0, min: 0, sec: 0, millisec: 0 });
    }
    const myFun = () => {
        if (updateMilliSec === 100) {
            updateMilliSec = 0;
            updateSec++;
        }
        if (updateSec === 60) {
            updateSec = 0;
            updateMin++;
        }
        if (updateMin === 60) {
            updateMin = 0;
            updateHr++;
        }
        updateMilliSec++;
        return setTime({ hr: updateHr, min: updateMin, sec: updateSec, millisec: updateMilliSec })
    }
    return (
        <>
            <div className='container'>
                <h1>{time.hr + ":" + time.min + ":" + time.sec + ":" + time.millisec}</h1>
                <div className='buttons'>
                    <button className='start' onClick={handleStart}>Start</button>
                    <button className='stop' onClick={handleStop}>Stop</button>
                    <button className='reset' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch