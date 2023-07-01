import React, { useState } from "react";
import { addTodo } from "../../Redux/modules/todos";
import { useDispatch } from "react-redux";

function TodoCreate() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const [nextId, setNextId] = useState(3);

  const titleChangeHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };
  const descChangeHandler = (event) => {
    setTodo({ ...todo, desc: event.target.value });
  };

  const addTodoHandler = () => {
    const newTodo = { id: nextId, ...todo, isDone: false };
    setNextId((prevId) => prevId + 1);
    dispatch(addTodo(newTodo));
    setTodo({ title: "", desc: "" });
  };

  return (
    <form>
      <input
        type="text"
        value={todo.title}
        onChange={titleChangeHandler}
        placeholder="제목을 입력하세요"
      />
      <input
        type="text"
        value={todo.desc}
        onChange={descChangeHandler}
        placeholder="내용을 입력하세요"
      />
      <button type="button" onClick={addTodoHandler}>
        추가하기
      </button>
    </form>
  );
}

export default TodoCreate;
