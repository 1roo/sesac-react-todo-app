import { useSelector } from "react-redux";

export default function DoneList() {
  let doneList = useSelector((state) => state.todo.list);
  doneList = doneList.filter((todo) => todo.done !== false);
  return (
    <section>
      <h3>완료 목록</h3>
      <ul>
        {doneList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
