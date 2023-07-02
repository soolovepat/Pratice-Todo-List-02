const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload };
};

const initialState = [
  { id: 1, title: "React 공부하기", desc: "To-do List 만들기", isDone: false },
  { id: 2, title: "Redux 익히기", desc: "반복 학습 !!", isDone: false },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

export default todos;
