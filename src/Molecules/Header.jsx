import { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Atoms/AuthContext";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import CreateIcon from '@mui/icons-material/Create';

const Header = () => {
  const { userData, logout } = useContext(AuthContext);
  const { pathname } = useLocation();
  let num;
  if (pathname.includes("dashboard")) num = 2;
  else if (pathname.includes("CRUD")) num = 3;
  else num = 1;
  const [selectedDiv, setSelectedDiv] = useState(num);

  const handleDivClick = (divId) => {
    setSelectedDiv(divId);
  };
  return (
    <header>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Logo"
              src="images/shopping.jpg"
              sx={{ width: 50, height: 50 }} // Adjust width and height as needed
            />
            <span>ShopSphere</span>
          </Typography>

          <Typography className="action_bar">
            <Link
              className={`action_container ${
                selectedDiv === 1 && "select-div"
              }`}
              to="/"
              onClick={() => handleDivClick(1)}
            >
              <HomeIcon />
              <span className="action_name">Home</span>
            </Link>

            <Link
              className={`action_container ${
                selectedDiv === 2 && "select-div"
              }`}
              to="/dashboard"
              onClick={() => handleDivClick(2)}
            >
              <GridViewRoundedIcon />
              <span className="action_name">Dashboard</span>
            </Link>

            <Link
              className={`action_container ${
                selectedDiv === 3 && "select-div"
              }`}
              to="/CRUD"
              onClick={() => handleDivClick(3)}
            >
              <CreateIcon />
              <span className="action_name">CRUD</span>
            </Link>
            {userData ? (
              <span className="action_container" onClick={logout}>
                <LogoutRoundedIcon />
                <span className="action_name">LogOut</span>
              </span>
            ) : (
              <Link className="action_container" to="/login">
                <LoginRoundedIcon />
                <span className="action_name">LogIn</span>
              </Link>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
