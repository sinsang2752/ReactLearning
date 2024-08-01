import React, { useState } from 'react';
import "./TodoEditor.css"

function TodoEditor(props) {
    const {onCreate} = props;
    const [content, setContent] = useState("");

    const onChangeHandler = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(!content) {
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDownHandler = (e) => {
        console.log("에?");
        if(e.keyCode === 13) {
            onSubmit();
        }
    }
    return (
        <div className='TodoEditor'>
            <h4>새로운 Todo 작성하기 ✏</h4>
            <div className="editor_wrapper">
                <input 
                value = {content}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                placeholder='새로운 Todo...' />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;