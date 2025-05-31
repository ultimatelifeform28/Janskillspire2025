import { useState, useEffect } from 'react';
function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => setCount(0);

    
    useEffect(() => {
        console.log(`Count updated: ${count}`);
    }, [count]); // This effect runs whenever count changes 


    return <div>
       <h1> Count: { count } </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
}

export default Counter