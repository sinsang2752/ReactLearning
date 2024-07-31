import React, { useState } from 'react';

function StateTest3(props) {
    const [student, setStudent] = useState(
        {
            username: "현상",
            useremail: "sinsang2752@naver.com",
            userphone: "010-9290-2752"
        }
    );
    const studentChangeHandler = (e) => {
        setStudent({...student, [e.target.name] : e.target.value});
    };
    return (
        <div>
            <p>이름: {student.username}</p>
            <p>이메일: {student.useremail}</p>
            <p>핸드폰: {student.userphone}</p>
            이름: 
            <input name={"username"} onChange={studentChangeHandler} value={student.username}></input>
            이메일: 
            <input name={"useremail"} onChange={studentChangeHandler} value={student.useremail}></input>
            핸드폰: 
            <input name={"userphone"} onChange={studentChangeHandler} value={student.userphone}></input>
        </div>
    );
}

export default StateTest3;