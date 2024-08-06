import React from "react";
import { useLocation } from "react-router-dom";

function WebBoardDelete(props) {
  const location = useLocation();
  const bno = location.state.bno;
  console.log(bno);

  return (
    <div>
      <p>WebBoardDelete</p>
    </div>
  );
}

export default WebBoardDelete;
<p>WebBoardDelete</p>;
