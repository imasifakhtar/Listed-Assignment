import { IconButton } from "@mui/material";
import "../Dashboard.css";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const LeftNav = () => {
  return (
    <div className="LeftNav">
      <div className="content">
        <div className="logo">
          <h1>Board.</h1>
        </div>

        <div className="Menu">
          <ul>
            <li>
              <IconButton sx={{ color: "#fff" }}>
                <AiOutlinePieChart />
              </IconButton>
              Dashboard
            </li>
            <li>
              <IconButton sx={{ color: "#fff" }}>
                <BsTags />
              </IconButton>
              Transaction
            </li>
            <li>
              <IconButton sx={{ color: "#fff" }}>
                <TbCalendarTime />
              </IconButton>
              Schedules
            </li>
            <li>
              <IconButton sx={{ color: "#fff" }}>
                <CgProfile />
              </IconButton>
              Users
            </li>
            <li>
              <IconButton sx={{ color: "#fff" }}>
                <AiOutlineSetting />
              </IconButton>
              Settings
            </li>
          </ul>
        </div>

        <div className="footer">
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
