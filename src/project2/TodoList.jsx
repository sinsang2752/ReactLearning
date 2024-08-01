import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoItemList, onDelete, onUpdate} = props;
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
    ? todoItemList : todoItemList.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        className="searchbar"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((item, idx) => (
          <TodoItem key={item.id} item={item} onDelete = {onDelete} onUpdate = {onUpdate}/>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
