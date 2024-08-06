import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { call } from "./ApiService";

function WebBoardList(props) {
  const [boardList, setBoardList] = useState([]);


  useEffect(() => {
    call("/api/board/list", "get",null)
    .then((response) => {
        setBoardList(response);
  });

    // axios, ajax, fetch, primise ..... 비동기 통신
    // axios({
    //   url: "/api/board/list",
    //   method: "GET",
    // })
    //   .then((response) => {
    //     // 비동기 통신을 성공했을 때
    //     console.log(response.data);
    //     setBoardList(response.data);
    //   })
    //   .catch((error) => {
    //     // 비동기 통신에 실패했을 때
    //     console.log(error);
    //   });
  }, []); //의존배열이 빈배열이면 최초 Rendering시 1회

  return (
    <div>
      <p>Board List</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>regDate</th>
            <th>updateDate</th>
            <th>댓글 수</th>
          </tr>
        </thead>
        <tbody>
            {boardList.map((board) => (
                <tr key = {board.bno}>
                    <td>
                        <Link to={`/webboard/detail/${board.bno}`}>{board.bno}</Link>
                        
                    </td>
                    <td>{board.title}</td>
                    <td>{board.content}</td>
                    <td>{board.mname}</td>
                    <td>{board.regdate}</td>
                    <td>{board.updatedate}</td>
                    <td>{board.replyCount}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WebBoardList;
