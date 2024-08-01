import React, { Component } from "react";

class ClassComponentTest extends Component {
  state = { message: "", color: "black" };
  enterListener = (e) => {
    this.setState({ message: e.target.innerHTML + "을 환영합니다." });
  };
  leaveListener = () => {
    this.setState({ message: "안녕히가셔요~~" });
  };
  colorListener= (e) => {
    this.setState({message: e.target.innerText + "변경", color: e.target.innerText})
  }

  render() {
    const myStyle = { color: this.state.color };
    return (
      <div>
        <button onClick={this.enterListener}>입장</button> {" "}
        <button onClick={this.leaveListener}>퇴장</button>
        <hr></hr>
        <button onClick={this.colorListener}>RED</button> {" "}
        <button onClick={this.colorListener}>GREEN</button> {" "}
        <button onClick={this.colorListener}>BLUE</button> {" "}
        <h1 style={myStyle}>{this.state.message}</h1> {" "}
        <h1>{this.state.color}</h1>
      </div>
    );
  }
}

export default ClassComponentTest;
