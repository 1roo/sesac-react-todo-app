import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function DoneList() {
  let doneList = useSelector((state) => state.todo.list).filter(
    (el) => el.done !== false
  );
  return (
    <section className="done-style">
      <h3>완료 목록</h3>
      <ul>
        {doneList.map((el) => {
          return (
            <li key={el.id}>
              <span>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ width: "15px", height: "15px", marginRight: "20px" }}
                />
                {el.text}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
