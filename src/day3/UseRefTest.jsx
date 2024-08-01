import React, { useState } from 'react';
import UseRefTest2 from './UseRefTest2';
import { Button } from 'react-bootstrap';

function UseRefTest(props) {
    const [childVisible, setChildVisible] = useState(false);
    const clickHandler = () => {
        setChildVisible(!childVisible);
    }
    return (
        <div>
            <h1>부모</h1>
            <Button onClick={clickHandler}>자식 보이기</Button>
            {childVisible && (
                <UseRefTest2/>
            )}       
        </div>
    );
}

export default UseRefTest;
