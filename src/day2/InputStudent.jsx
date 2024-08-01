import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function InputStudent(props) {

    const {student, setStudent, addHandler} = props;

    const changeHandler = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
      };
    
     
    return (
        <div>
            <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="mid">학생번호</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="mid"
          name="mid"
          onChange={changeHandler}
          value={student.mid}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="age">학생이름</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="age"
          name="age"
          onChange={changeHandler}
          value={student.age}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="email">전공</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="email"
          name="email"
          onChange={changeHandler}
          value={student.email}
        />
      </InputGroup>
      <Button variant="success" onClick={addHandler}>
        학생 추가
      </Button>
        </div>
    );
}

export default InputStudent;