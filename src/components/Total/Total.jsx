import "./Total.css";
import { TbCashBanknote } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiLike } from "react-icons/bi";

const Total = () => {
  return (
    <div className="totalBx">
      <div className="iconBx" style={{ backgroundColor: "#ddefe0" }}>
        <div className="icon">
          <TbCashBanknote size={30} />
        </div>
        <div className="boxHeading">
          <h3>Total Revenues</h3>
        </div>
        <div className="nums">$2,129,430</div>
      </div>
      <div className="iconBx" style={{ backgroundColor: "#F4ECDD" }}>
        <div className="icon">
          <BsTags size={30} />
        </div>
        <div className="boxHeading">
          <h3>Total Transactions</h3>
        </div>
        <div className="nums">1,520</div>
      </div>
      <div className="iconBx" style={{ backgroundColor: "#EFDADA" }}>
        <div className="icon">
          <BiLike size={30} />
        </div>
        <div className="boxHeading">
          <h3>Total Likes</h3>
        </div>
        <div className="nums">9,721</div>
      </div>
      <div className="iconBx" style={{ backgroundColor: "#DEE0EF" }}>
        <div className="icon">
          <FiUsers size={30} />
        </div>
        <div className="boxHeading">
          <h3>Total Users</h3>
        </div>
        <div className="nums">892</div>
      </div>
    </div>
  );
};

export default Total;
