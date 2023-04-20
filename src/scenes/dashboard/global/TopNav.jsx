import { Box, IconButton } from "@mui/material";
import { useContext } from "react";
import { InputBase } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import "../Dashboard.css";

const TopNav = () => {
  return (
    <div className="top">
      {/* HEADING */}
      <div className="left">
        <h1>Dashboard</h1>
      </div>

      {/* { SEARCH BAR } */}
      <div className="right">
        <div className="searchBar">
          <InputBase className="inputBx" placeholder="Search..." />
          <IconButton type="button" className="searchBtn">
            <SearchIcon />
          </IconButton>
        </div>

        {/* ICONS */}
        <div className="icons">
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          <IconButton>
            <Avatar
              alt="Admin"
              src="https://mui.com/static/images/avatar/3.jpg"
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>
        </div>
      </div>

      {/* <IconButton className="search-Btn"></IconButton> */}
    </div>
  );
};

export default TopNav;
