import Schedule from "../../../components/Schedule/Schedule";
import "./Todo.css";

function Todo() {
  return (
    <div className="toDo">
      <div className="todoHeading">
        <h2>Today's Schedule</h2>
        <span>See All</span>
      </div>
      <Schedule />
    </div>
  );
}

export default Todo;
