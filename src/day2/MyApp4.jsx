import React from 'react';
import PropsComponentTest from './PropsComponentTest';

function MyApp4(props) {
    const arr = ["HTML", "CSS", "JavaScript", "ReactJS"];
    return (
        <div>
            <PropsComponentTest subject={arr}>배열로 들어온 속성값 주고 받기</PropsComponentTest>
            <PropsComponentTest>보낸 값 없음</PropsComponentTest>
        </div>
    );
}

export default MyApp4;