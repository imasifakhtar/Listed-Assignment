import { mockSchedule } from "../../data/mockData";

const Schedule = () => {
  return (
    <div className="allTasks">
      {mockSchedule.map((data) => (
        <div className="task">
          <h2>{data.title}</h2>
          <span>{data.time}</span>
          <span>{data.location}</span>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
