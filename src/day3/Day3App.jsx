import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import ControllerButton from "./ControllerButton";

function Day3App(props) {
  //data 상태관리
  const [count, setCount] = useState(0);
  const clickHandler = (e) => {
    setCount(count + Number(e.target.innerText));
  };

//   const clickHandler2 = (value) => {
//     setCount(count + value);
//   };

  return (
    <div>
      <h1>CountApp</h1>
      <DisplayCount count={count} />
      <ControllerButton
        clickHandler={clickHandler}
        // clickHandler2={clickHandler2}
      />
    </div>
  );
}

export default Day3App;
