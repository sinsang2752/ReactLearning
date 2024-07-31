import { Component } from 'react';
import { Button } from 'react-bootstrap';

class StateClassComponent extends Component {
    constructor(props) {
        super(props)
        console.log("StateClassComponent의 생성자");
        this.state = {count: 0, message: "count 하기"};
    }

    clickCountHandler = (e) => {
        if(e.target.innerHTML === "더하기"){
            this.setState({count: this.state.count + 1, message:"더하기(+)"})
        } else {
            this.setState({count: this.state.count - 1, message:"빼기(-)"})
        }
      };

    render() {
        return (
            <div>
                <h1>StateClassComponent!!!!!!!!</h1>
                <p>현재 count: {this.state.count}</p>
                <p>현재 message: {this.state.message}</p>
                <Button onClick={this.clickCountHandler}>더하기</Button> {" "}
                <Button onClick={this.clickCountHandler}>빼기</Button>
            </div>
        );
    }
}

export default StateClassComponent;