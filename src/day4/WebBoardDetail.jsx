import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { call } from "./ApiService";

function WebBoardDetail(props) {
  const { bno } = useParams();
  console.log("파라메터 받기: " + bno);

  const [board, setBoard] = useState({});

  useEffect(() => {

    call(`/api/board/detail/${bno}`, "get", null).then((res) => {
        setBoard(res);
    });

    // // axios, ajax, fetch, primise ..... 비동기 통신
    // axios({
    //   url: `/api/board/detail/${bno}`,
    //   method: "GET",
    // })
    //   .then((response) => {
    //     // 비동기 통신을 성공했을 때
    //     console.log(response.data);
    //     setBoard(response.data);
    //   })
    //   .catch((error) => {
    //     // 비동기 통신에 실패했을 때
    //     console.log(error);
    //   });
  }, []); //의존배열이 빈배열이면 최초 Rendering시 1회

  const changeHandler = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const clickHandler = () => {
    console.log(board);
    call("/api/board/modify", "put", board);
}

const clickHandler2 = () => {
    call(`/api/board/delete?bno=${bno}`, "delete", null).then(() => {
        window.location.href = "/webboard/list";
    })
    
}
  return (
    <div>
      <p>WebBoardDetail</p>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">bno</InputGroup.Text>
        <Form.Control name="bno" defaultValue={board.bno} disabled = {true}></Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
        <Form.Control name="title" defaultValue={board.title} onChange={changeHandler}></Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
        <Form.Control
          name="content"
          defaultValue={board.content}
          onChange={changeHandler}
        ></Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">작성자</InputGroup.Text>
        <Form.Control name="mname" defaultValue={board.mname} disabled = {true}></Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">등록일</InputGroup.Text>
        <Form.Control
          name="regdate"
          defaultValue={board.regdate}
          disabled = {true}
        ></Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">수정일</InputGroup.Text>
        <Form.Control
          name="updatedate"
          defaultValue={board.updatedate}
          disabled = {true}
        ></Form.Control>
      </InputGroup>
      <Button onClick={clickHandler}>수정하기</Button>
      <Button onClick={clickHandler2} variant="danger">삭제하기</Button>
    </div>
  );
}

export default WebBoardDetail;
