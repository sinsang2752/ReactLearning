// 부모가 자식에게 Property를 보내면 받기
import React from 'react';

function PropsComponentTest(props) {
    var {subject} = props;
    subject = subject === undefined? ["A","B","C"] : subject;
    return (
        <div>
            <h1>{props.children}</h1>
            <ul>
                {subject.map((item,idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default PropsComponentTest;