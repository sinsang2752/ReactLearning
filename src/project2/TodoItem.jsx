import React from 'react';
import "./TodoItem.css"

function TodoItem(props) {
    const {item, onDelete, onUpdate} = props;
    
    const onClickDelete = () => {
        onDelete(item.id)
    }

    const onChangeCheckBox = () => {
        onUpdate(item.id);
    }
    return (
        <div className='TodoItem' key={item.id}>
            <div className='checkbox_col'>
                <input type="checkbox" checked={item.isDone} onChange={onChangeCheckBox}/>
            </div>
            <div className='title_col'>{item.content}</div>
            <div className='data_col'>{item.createDate}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default TodoItem;