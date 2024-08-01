import React from 'react';

function ControllerButton({clickHandler, clickHandler2}) {
    return (
        <div>
            <button onClick={clickHandler}>+1</button>
            <button onClick={clickHandler}>+100</button>
            <button onClick={clickHandler}>+1000</button>
            <button onClick={clickHandler}>-1</button>
            <button onClick={clickHandler}>-100</button>
            <button onClick={clickHandler}>-1000</button>
            {/* <button onClick={clickHandler2(-1000)}>-1000</button> */}

        </div>
    );
}

export default ControllerButton;