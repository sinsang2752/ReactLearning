import React from "react";
import "a2/Test.css";
const Header = () => {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
  };
  return (
    <header style={{ border: "1px solid gray" }}>
      <h1 className="myStyle">반갑습니다....</h1>{" "}
      <h2 className="myStyle2">React배우기전 선수지식은?</h2>{" "}
      <p style={inlineStyle}>Style연습..inline</p>{" "}
      <p style={inlineStyle} className="myStyle2">
        Style연습...class이름{" "}
      </p>{" "}
    </header>
  );
};
export default Header;
