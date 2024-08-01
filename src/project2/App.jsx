import { useRef, useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

function App(props) {
  var todoIdx = useRef(1);

  const [todoItemList, setTodoItemList] = useState([]);

  const onCreate = (content) => {
    const newItem = {
        id: todoIdx.current,
        content,
        isDone: false,
        createDate: new Date().toLocaleDateString()
    };
    setTodoItemList([...todoItemList, newItem]);
    todoIdx.current ++;
    console.log(newItem);
  };

  const onDelete = (targetId) => {
    setTodoItemList(todoItemList.filter((it) => it.id !== targetId));
  };

  const onUpdate = (targetId) => {
    setTodoItemList(todoItemList.map((it) => {
        if(it.id === targetId){
            return {...it, isDone: !it.isDone};
        } else {
            return it;
        }
    }) );
  }
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todoItemList={todoItemList} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
