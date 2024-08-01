import { Component } from "react";
import { Button } from "react-bootstrap";
import LifeCycleClass2 from "./LifeCycleClass2";

class LifeCycleClass extends Component {
  constructor(props) {
    super(props);
    console.log("부모 Constructor");
    this.state = { title: "초기값", childVisible: false };
  }

  componentDidMount() {
    console.log("부모 componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("부모 shouldComponentUpdate");
    // 변경됨? 가상돔이 가지고 있는 상태값과 변경된 값이 같은가?
    return this.state.title !== nextState.title || this.state.childVisible !== nextState.childVisible;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("부모 componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("부모 componentWillUnmount");
  }

  titleChangeHandler = () => {
    this.setState({ title: "타이틀 변경됨." });
  };
  childDisplayHandler = () => {
    this.setState({childVisible: !this.state.childVisible});    
  }
  render() {
    console.log("부모 render");
    return (
      <div>
        <h3>부모 title: {this.state.title}</h3>
        <Button onClick={this.titleChangeHandler}>변경하기</Button>
        <Button onClick={this.childDisplayHandler}>자식 보여주기</Button>
        {this.state.childVisible && (
            <LifeCycleClass2 title={this.state.title} />
        )}
      </div>
    );
  }
}

LifeCycleClass.propTypes = {};

export default LifeCycleClass;
