import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function LifeCycleFunction(props) {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const now = () => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    setCurrentTime(`${h}:${m}:${s}`);
    console.log("타이머실행");
  };

  useEffect(() => {
    const timer = setTimeout(now, 1000);
    return () => {
      clearTimeout(timer);
      console.log("timer변수가 제거됨.")
    };
  }, [currentTime]);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("load시 1회. (빈 의존배열)");
  }, []);

  useEffect(() => {
    console.log("rendering 될 때마다 실행된다. (의존배열 생략)");
  });

  useEffect(() => {
    console.log("rendering 될때, count 변경 시 실행된다.");
  }, [count]);

  useEffect(() => {
    console.log("rendering 될때, count2 변경 시 실행된다.");
  }, [count2]);

  useEffect(() => {
    console.log("rendering 될때, count, count2 변경 시 실행된다.");
  }, [count, count2]);

  const addHandler = () => {
    setCount(count + 1);
  };

  const addHandler2 = () => {
    setCount2(count2 - 1);
  };
  return (
    <div>
      <h1>
        함수의 LifeCycle : count={count}, count2 = {count2}
      </h1>
      <Button onClick={addHandler}>1증가</Button>{" "}
      <Button onClick={addHandler2}>1감소</Button>
    </div>
  );
}

export default LifeCycleFunction;
