import React, { useCallback, useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import { reducer1 } from "day4/reducer1";

//상태관리를 Componet내에서 직접한다 : useState()
//상태관리를 Componet외부에서 한다 : useReducer()

//업무로직(상태변경)...외부파일로 저장함
// export function reducer1(state, action) {
//   switch (action.type) {
//     case "PLUS":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// }

function ReducerTest(props) {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer1, 0);

  const clickHandler = useCallback(
    (e) => {
      if (e.target.innerText === "증가") {
        //setCount(count + 1);
        dispatch({ type: "PLUS" });
      } else {
        //setCount(count - 1);
        dispatch({ type: "MINUS" });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count]
  );
  return (
    <div>
      <h2>현재count:{count}</h2>
      <Button onClick={clickHandler}>증가</Button>
      <Button onClick={clickHandler}>감소</Button>
    </div>
  );
}

export default ReducerTest;
