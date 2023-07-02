import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoSection = ({ title, todos, isDone }) => {
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <TodoSection title="Working..." todos={todos} isDone={false} />
      <TodoSection title="Done..." todos={todos} isDone={true} />
    </div>
  );
};

export default TodoList;
