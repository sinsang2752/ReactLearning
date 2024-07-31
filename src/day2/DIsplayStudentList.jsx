import React from "react";
import { Card } from "react-bootstrap";

function DIsplayStudentList(props) {
  const { studentList } = props;
  return (
    <div>
      {studentList.map((item, idx) => (
        <Card style={{ width: "18rem", display: "inline-block" }} key={idx}>
          <Card.Header>{item.stdId}</Card.Header>
          <Card.Body>
            <Card.Title>{item.stdName}</Card.Title>
            <Card.Text>학생의 전공은 {item.major}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DIsplayStudentList;
