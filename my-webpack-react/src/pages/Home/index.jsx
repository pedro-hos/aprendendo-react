import React, { useState } from "react";

export default function Home() {

    const [counter, setCounter] = useState(0);
    
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <h1>{counter}</h1>
        </div>
    )
}