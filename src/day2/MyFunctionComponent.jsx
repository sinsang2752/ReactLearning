import React from 'react';

function MyFunctionComponent(props) {
    const inlineStyle = {border: "1px solid green", color: "blue"};
    return (
        <div style={inlineStyle}>
            <h1 style={{color: "red"}}>FunctionComponent</h1>
            <p>속성 받기 subject: {props.subject}</p>
            <p>속성 받기 score: {props.score}</p>
            <p>tag 사이 내용: {props.children}</p>
        </div>
    );
}

export default MyFunctionComponent;