import DIsplayStudentList from "day2/DIsplayStudentList";
import InputStudent from "day2/InputStudent";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const initMember = { mid: 1, name: "아무개", age: 10, email: "a@gmail.com" };
const initList = [
  initMember,
  { mid: 2, name: "심은정", age: 20, email: "b@gmail.com" },
  { mid: 3, name: "김유리", age: 22, email: "c@gmail.com" },
];
function UseRefTest3(props) {
  const [member, setMember] = useState(initMember);
  const [memberList, setMemberList] = useState(initList);

  const nameInput1 = useRef();
  const nameInput2 = useRef();
  // DOM을 대신해서 사용 시
  // 2. 다시 렌더링 되어도 초기화되지않는 변수가 필요하다.
  var memberId = useRef(4);

  const clickHandler1 = () => {
    nameInput1.current.focus();
  };
  // 2. 다시 렌더링 되어도 초기화되지않는 변수가 필요하다.
  const clickHandler2 = () => {
    nameInput2.current.focus();
  };

  const changeHandler = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    const newMember = { ...member, mid: memberId.current };
    setMember(newMember);
    memberId.current += 1;
    setMemberList([...memberList, newMember]);
  };

  useEffect(() => {
    console.log(memberList);
  }, [memberList]);

  return (
    <div>
      <input ref={nameInput1} />
      <input ref={nameInput2} />
      <Button onClick={clickHandler1}>이동1</Button>
      <Button onClick={clickHandler2}>이동2</Button>
      <InputStudent
        student={member}
        setStudent={setMember}
        addHandler = {addHandler}
      />
      <DIsplayStudentList studentList = {memberList}/>
    </div>
  );
}

export default UseRefTest3;
