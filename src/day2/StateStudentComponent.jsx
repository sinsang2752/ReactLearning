import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import DIsplayStudentList from "./DIsplayStudentList";

function StateStudentComponent(props) {
  const initStudent = { stdId: 1, stdName: "현상", major: "컴공" };

  const [student, setStudent] = useState(initStudent);
  const [studentList, setStudentList] = useState([initStudent]);

  const changeHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const addHandler = (e) => {
    setStudentList([...studentList, student]);
  };

  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="stdId">학생번호</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="stdId"
          name="stdId"
          onChange={changeHandler}
          value={student.stdId}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="stdName">학생이름</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="stdName"
          name="stdName"
          onChange={changeHandler}
          value={student.stdName}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="major">전공</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="major"
          name="major"
          onChange={changeHandler}
          value={student.major}
        />
      </InputGroup>
      <Button variant="success" onClick={addHandler}>
        학생 추가
      </Button>
      <hr></hr>
      <h2>학생들 목록</h2>
      <DIsplayStudentList studentList = {studentList} />
    </div>
  );
}

export default StateStudentComponent;
