import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../Redux/modules/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, desc, isDone } = todo;

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        {isDone ? (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={handleToggle}>취소</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={handleToggle}>완료</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
