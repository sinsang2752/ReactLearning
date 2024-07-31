import React from "react";
import ExportTest,{constTest, varTest, Func1, Func2} from "day1/ExportTest";
import "day1/external.css"

// 함수형 Component: 컴포넌트 이름은 반드시 대문자.
function MyApp2(props) {
  var myname = "ReactJS";
  const score = 99;
  const student = { name: "현상", major: "컴퓨터공학" };

  // 이부분의 값은 JSX에서 읽어서 출력 시 display안됨.
  let score2 = null;
  let score3 = undefined;
  let score4 = false;

  const hobbyArr = ["Sports", "Music", "Movie"];
  const hobbyDisplay = hobbyArr.map((item, index) => (<li key={index}>{item}</li>))

  //import한 값, 함수 사용하기
  console.log(constTest);
  console.log(varTest);

  const inlineStyle= {border: "3px dotted blue", color: "orange"}

  return (
    <div style={inlineStyle}>
      <h1 style={{backgroundColor: "green"}}>함수형 Component</h1>
      <p className="myStyle2">constTest: {constTest}</p>
      <p className="myStyle3">varTest: {varTest}</p>

      
      {/* import 연습 */}
      <ExportTest/>
      <Func1 />
      <Func2 />
      <p>이름은 {myname}</p>
      <p>점수는 {score}</p>
      <p>
        student 정보: {student.name} ---------- {student.major}
      </p>
      <p>
        점수는2 {score2} {score2 == null ? "값 없음" : score2}
      </p>
      <p>
        점수는3 {score3} {score3 ? score3 : "값 없음"}
      </p>
      <p>
        점수는4 {score4} {score4 ? score4 : "값 없음"}
      </p>
      <div>{hobbyArr}</div>
      <ul>
        {hobbyArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {hobbyDisplay}
      </ul>
    </div>
  );
}

export default MyApp2;
