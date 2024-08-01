import React from "react";
import { Card } from "react-bootstrap";

function DIsplayStudentList(props) {
  const { studentList } = props;
  return (
    <div>
      {studentList.map((item, idx) => (
        <Card style={{ width: "18rem", display: "inline-block" }} key={idx}>
          <Card.Header>{item.name}</Card.Header>
          <Card.Body>
            <Card.Title>{item.age}</Card.Title>
            <Card.Text>학생의 전공은 {item.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DIsplayStudentList;
