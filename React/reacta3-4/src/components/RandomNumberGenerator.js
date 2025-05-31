import React, { useState } from 'react';

export default function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1); // Initialize with a random number

    React.useEffect(() => {
        const interval = setInterval(() => { // Generates a random number between 1 and 100
            setRandomNumber(Math.floor(Math.random() * 100) + 1);
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h1>Random Number: {randomNumber}</h1>
        </div>
    );
}