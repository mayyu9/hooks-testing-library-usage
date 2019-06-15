import React, {useState} from 'react';

const Counterhook = () => {
    let[count, setCount]= useState(0);

    const increment = () => {
        setCount(count +=1)
    }
    const decrement = () => {
        setCount(count -=1)
    }

    return(
        <>
            <h1 style={{textAlign: 'center'}}>Counter example using hooks</h1>
            <div style={{textAlign: 'center'}}>
            <p data-testid="countValue">{count}</p>
            <button data-testid='incBtn' onClick={increment}>+</button>
            {" "}
            <button data-testid='decBtn' onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Counterhook;