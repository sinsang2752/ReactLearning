import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import WebBoardDetail from "./WebBoardDetail";
import { Button } from "react-bootstrap";
import WebBoardUpdate from "./WebBoardUpdate";
import WebBoardDelete from "./WebBoardDelete";
import WebBoardList from "./WebBoardList";
import WebBoardInsert from "./WebBoardInsert";

function WebBoardHome(props) {
  const navi = useNavigate();
  const clickHandler1 = () => {
    navi("/");
  };

  const clickHandler2 = () => {
    navi("/webboard/list");
  };

  const clickHandler3 = () => {
    navi(-1);
  };

  const [board, setBoard] = useState({ bno: 100, title: "react배우기" });

  return (
    <div>
      <h1>WebBoard CRUD Test</h1>
      <Link to="list">목록보기</Link>{" "}
      <Link to="insert">입력</Link>{" "}
      <Link to="delete" state={{ bno: 99 }}>
        삭제
      </Link>{" "}
      <Link to="update" state={{ board }}>
        수정
      </Link>{" "}
      <Button onClick={clickHandler1}>처음화면으로 이동</Button>{" "}
      <Button onClick={clickHandler2}>Board목록 이동</Button>{" "}
      <Button onClick={clickHandler3}>이전 페이지 이동</Button>
      <Routes>
        <Route path="/list" element={<WebBoardList />} />
        <Route path="/detail/:bno" element={<WebBoardDetail />} />
        <Route path="/update" element={<WebBoardUpdate />} />
        <Route path="/delete" element={<WebBoardDelete />} />
        <Route path="/insert" element={<WebBoardInsert/>}/>
      </Routes>
    </div>
  );
}

export default WebBoardHome;
