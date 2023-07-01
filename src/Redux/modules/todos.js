const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const initialState = [
  { id: 1, title: "React 공부하기", desc: "To-do List 만들기", isDone: false },
  { id: 2, title: "Redux 익히기", desc: "반복 학습 !!", isDone: false },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
