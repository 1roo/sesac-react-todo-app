import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";
import { useEffect, useRef } from "react";

export default function TodoList() {
  // useSelector()를 통해 store(todo.js)의 state 가져오기
  let todoList = useSelector((state) => state.todo.list);
  todoList = todoList.filter((todo) => todo.done === false);

  const nextID = useSelector((state) => state.todo.nextID);

  // useDispatch()를 통해 dispatch함수 생성
  const dispatch = useDispatch();

  const inputRef = useRef();

  const createTodo = () => {
    dispatch(create({ id: nextID, text: inputRef.current.value }));
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const enterTodo = (e) => {
    if (e.nativeEvent.isComposing) return; // 한글 입력 후 엔터 치면 뒤에 같은글자 또 써짐 방지
    if (e.key === "Enter") createTodo();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="css-style">
      <h3>할일 목록</h3>
      <div>
        <input type="text" ref={inputRef} onKeyDown={enterTodo} />
        <button
          onClick={createTodo}
          style={{ backgroundColor: "rgba(128, 128, 0, 0.187)" }}>
          추가
        </button>
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <button
                onClick={() => {
                  dispatch(done(todo.id));
                }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ width: "15px", height: "15px" }}
                />
              </button>
              <span
                onClick={() => {
                  dispatch(done(todo.id));
                }}>
                {todo.text}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
