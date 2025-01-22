const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "척추의 요정이 말합니다! 척추 펴기!",
      done: true,
    },
    {
      id: 2,
      text: "운동하기",
      done: false,
    },
  ],
};

export function todoReducer(state = initialState, action) {
  return state;
}
