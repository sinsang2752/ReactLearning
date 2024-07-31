import React, { Component } from 'react';
import "day1/external.css"
import Button from "react-bootstrap/Button";

class MyClassComponent extends Component {
    render() {
        const inlineStyle = {border: "1px solid orange", color: "blue"};

        return (
            <div style={inlineStyle}>
                <h1 style={{backgroundColor: "lightpink"}}>ClassComponent</h1>
                <h2 className='myStyle2'>외부 Css 사용</h2>
                <Button variant='primary'>primary</Button> {" "}
                <Button variant='secondary'>secondary</Button>
                <p>Class 속성 받기 subject: {this.props.subject}</p>
                <p>Class속성 받기 score: {this.props.score}</p>
            </div>
        );
    }
}

export default MyClassComponent;