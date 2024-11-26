import React, { useState, useEffect } from 'react'



const  CountdownTimer: React.FC = () => {
    const [time, setTime] =useState(0)
    const[isRunning, setIsRunning ] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0)


useEffect(() => {
    let timer: NodeJS.Timeout;
    if  (isRunning && remainingTime > 0 ){
        timer = setInterval(() => {
            setRemainingTime((prev) => prev - 1)
}, 1000)
    
} 
else if (remainingTime === 0) {
    setIsRunning(false)

}
 return () => clearInterval(timer);
},[isRunning, remainingTime])

const handleStart = () => {
    if (time > 0) {
        setRemainingTime(time)
        setIsRunning(true)
    }
}
const handlePause = () => {
    setIsRunning(false)
}
const handleReset =() => {
    setIsRunning(false)
    setRemainingTime(0)
    setTime(0)
}

return (
    <div className=' flex flex-col  font-serif min-h-screen
    items-center justify-center bg-gradient-to-br from-black to-grey-800'>
    

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0alKa71i72OH5BaLty-UFWeCNbGYiCG2h9Y8QGAWdvIMHrRdPuybu-EJ4Tg&s" alt="nflogo"
    className='absolute top-4 right-4 h-auto w-40'/>

    <h1 className='text-4xl  bg-gradient-to-br from-white to-blue-600  font-extrabold uppercase mb-6'>Countdown Timer</h1>
    <input
    type="number"
    className='border-2 border-grey-400 bg-transparent p-3
    mb-6 text-white text-xl rounded'
    placeholder='Enter  time in seconds'
    value={time > 0 ? time : ""}
    onChange={(e) => setTime(Number(e.target.value))}/>
    <div className='text-3xl text-white font-semibold uppercase mb-6'>
        {remainingTime} Second Remaining
    </div>
<div>
    <button
    onClick={handleStart}
    className='text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-blue-500 to-teal-500
    hover:from-purple-600 hover:to-black'>
        Start
    </button>

    <button
    onClick={handlePause}
    className='text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-yellow-500 to-orange-500
    hover:from-purple-600 hover:to-black'>
        Pause
    </button>

    <button
    onClick={handleReset}
    className='text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-red-800 to-pink-800
    hover:from-purple-600 hover:to-black'>
        Reset
    </button>
  
</div>


    </div>
     
)




}


export default CountdownTimer
