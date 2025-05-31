import { useState, useEffect } from "react"

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevTime) => prevTime + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>Time: {seconds} seconds</h1>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    )
}

export default Timer