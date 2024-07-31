import React, { useState } from "react";
import { Button } from "react-bootstrap";

function StateFunctionComponent(props) {
  const [light, setLight] = useState("off");
  const clickHandler = () => {
    setLight(light === "on" ? "off" : "on");
    // 불가 코드 light = light === "on" ? "off" : "on"
  };
  return (
    <div>
      <p>현재 상태값: {light}</p>
      <Button onClick={clickHandler}>상태 변경하기</Button>
    </div>
  );
}

export default StateFunctionComponent;
