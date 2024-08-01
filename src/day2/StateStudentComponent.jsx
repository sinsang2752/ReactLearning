import { useState } from "react";
import DIsplayStudentList from "./DIsplayStudentList";
import InputStudent from "./InputStudent";

function StateStudentComponent(props) {
  const initStudent = { stdId: 1, stdName: "현상", major: "컴공" };

  const [student, setStudent] = useState(initStudent);
  const [studentList, setStudentList] = useState([initStudent]);

  const addHandler = (e) => {
    setStudentList([...studentList, student]);
  };
  return (
    <div>
      <InputStudent
        student={student}
        setStudent={setStudent}
        addHandler = {addHandler}
      />
      <hr></hr>
      <h2>학생들 목록</h2>
      <DIsplayStudentList studentList={studentList} />
    </div>
  );
}

export default StateStudentComponent;
