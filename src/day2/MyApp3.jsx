import React from 'react';
import MyFunctionComponent from './MyFunctionComponent';
import MyClassComponent from './MyClassComponent';

function MyApp3(props) {
    var myData = {subject: "리엑트 학습", score:100};
    return (
        <div>
            <MyFunctionComponent subject="react1" score={99}>function1</MyFunctionComponent>
            <MyFunctionComponent subject="react1" score={98}>function2</MyFunctionComponent>
            <MyFunctionComponent {...myData}>function2</MyFunctionComponent>
            <MyFunctionComponent>function2</MyFunctionComponent>
            <MyClassComponent subject="react1" score={88}>class1</MyClassComponent>
            <MyClassComponent subject="react1" score={87}>class2</MyClassComponent>
            <MyClassComponent>class2</MyClassComponent>
        </div>
    );
}

MyFunctionComponent.defaultProps = {subject:"defaultSubject", score:50};
MyClassComponent.defaultProps = {subject:"defaultSubject", score:55};
export default MyApp3;