import React from "react";

export const constTest = 100;
export var varTest = "문자값";
export function Func1() {
  return <p>함수1</p>;
}
export const Func2 = function () {
  return <p>함수2</p>;
};

// export default는 오직 하나만 가능
export default function ExportTest(props) {
  return (
    <div>
      <p>ExportTest함수(default export)</p>
    </div>
  );
}

// 각각 export 예약어를 사용할 수 도 있고 한꺼번에 작성도 가능하다.
// export ExportTest as default,{constTest, varTest, Func1, Func2}