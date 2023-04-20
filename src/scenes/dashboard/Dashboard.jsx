import "./Dashboard.css";
import LeftNav from "./global/LeftNav";
import Right from "./global/Right";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LeftNav />
      <Right />
    </div>
  );
};

export default Dashboard;
