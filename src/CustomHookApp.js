import React from 'react';
import {useCounter} from './CustomHook';

const CustomHookApp = (props)=>{
    //const userCounterObject = useCounter(4);
    const {count, increment, decrement} = useCounter(4);
    return(
        <div style={{textAlign:'center'}}>
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default CustomHookApp;