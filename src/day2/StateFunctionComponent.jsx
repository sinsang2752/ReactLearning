import React, { useState } from "react";
import { Button } from "react-bootstrap";

function StateFunctionComponent(props) {
  const [light, setLight] = useState("off");
  const [light2, setLight2] = useState(false);
  const [count, setCount] = useState(0);
  
  const clickHandler = () => {
    setLight(light === "★on" ? "☆off" : "★on");
    // 불가 코드 light = light === "on" ? "off" : "on"
  };

  const clickHandler2 = () => {
    setLight2(!light2)
  };

  const clickCountHandler = (e) => {
    if(e.target.innerHTML === "증가"){
        setCount(count + 1);
    } else {
        setCount(count - 1);
    }
  };

  
  return (
    <div>
      <p>현재 상태값: {light}</p>
      <p>현재 상태값: {light2?"☆켜짐": "★꺼짐"}</p>
      <p>현재 카운트: {count}</p>
      <Button onClick={clickHandler}>상태 변경하기</Button>
      <Button onClick={clickHandler2}>상태 변경하기</Button>
      <Button onClick={clickCountHandler}>증가</Button>
      <Button onClick={clickCountHandler}>감소</Button>
    </div>
  );
}

export default StateFunctionComponent;
