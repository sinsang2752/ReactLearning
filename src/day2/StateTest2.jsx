import React, { useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';

function StateTest2(props) {

    const [member, setMember] = useState({name:"아무개", age:30});
    const [memberList, setMemberList] = useState([member])
    const f1 = () => {
        var obj = {name:"아무개", age:30};
        obj["age"] = 40;
        obj.age = 50;
        obj.name2 = "신한";
        var name2 = "aa";
        obj[name2] = "신한aa";
        console.log(obj);
        var obj2 = {...obj, age:99};
        console.log("2:", obj2);
    };

    f1();

    const onMemberChangeHandler = (e) => {
        var newMember = {...member, [e.target.name]:e.target.value};
        setMember(newMember);
        //setMember({...member, [e.target.name]:e.target.value}); //속성을 대괄호로 표시 / 비동기 처리됨
        //console.log(e.target.name, e.target.value);
        console.log("setMember 비동기처리되기 때문에 setting하고 출력이 아님", newMember);
    };

    const addHandler = () => {
        setMemberList([...memberList, member])
    };

    return (
        <div>
            <h3>이름과 나이를 입력</h3>
            <p>이름:{member.name}</p>
            <p>나이:{member.age}</p>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
            <Form.Control
                name = "name"
                defaultValue={member.name}
                onChange={onMemberChangeHandler}
                aria-label="name"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
            <Form.Control
                name = "age"
                defaultValue={member.age}
                onChange={onMemberChangeHandler}
                aria-label="age"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            <Button variant='success' onClick={addHandler}>맴버추가</Button>
            <hr></hr>
            <h4>맴버 목록</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    {memberList.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name + (index + 1)}</td>
                                <td>{item.age + index}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}

export default StateTest2;