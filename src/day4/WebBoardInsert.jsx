import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { call } from "./ApiService";

function WebBoardInsert(props) {

    const [board, setBoard] = useState({title:"", content: ""});

    const changeHandler = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
      };

    const clickHandler = () => {
        console.log(board);
        call("/api/board/register", "post", board).then(() => {
            window.location.href = "/webboard/list";
        })
    }

   

  return (
    <div>
      <p>WebBoardInsert</p>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
        <Form.Control name="title" onChange={changeHandler}></Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
        <Form.Control name="content" onChange={changeHandler}></Form.Control>
      </InputGroup>
      <Button onClick={clickHandler}>입력하기</Button>
    </div>
  );
}

export default WebBoardInsert;
