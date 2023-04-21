import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* BOARD LOGO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "35%",
          height: "100%",
          backgroundColor: "black",
          fontFamily: "'Montserrat', sans-serif",
          color: "white",
          fontSize: "38px",
          fontWeight: "700",
        }}
      >
        <h3>Board.</h3>
      </Box>
      {/* BOARD LOGO END*/}

      {/* LOGIN FORM  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "65%",
          height: "100%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "35%",
          }}
        >
          <Box
            sx={{
              lineHeight: "1.6rem",
            }}
          >
            <Typography
              fontFamily="'Montserrat', sans-serif"
              fontWeight={700}
              fontSize={24}
            >
              Sign In
            </Typography>
            <Typography fontFamily="'Lato', sans-serif" fontSize={14}>
              Sign in to your account
            </Typography>
          </Box>

          {/* LOGIN WITH */}
          <div className="quick">
            <button className="loginBtn">
              <FcGoogle /> Sign in with Google
            </button>
            <button className="loginBtn">
              <AiFillApple /> Sign in with Apple
            </button>
          </div>
          {/* LOGIN WITH END */}

          {/* FORM SECTION */}
          <form>
            <div className="inputBx">
              <label>Email address</label>
              <input type="email" name="" />
            </div>
            <div className="inputBx gap">
              <label>Password</label>
              <input type="password" name="" />
            </div>
            {/* <div className="forgot gap"> */}
            <Typography
              fontFamily="'Lato', sans-serif"
              color="#346bd4"
              fontSize={16}
              paddingTop={1}
            >
              Forgot password?
            </Typography>
            {/* </div> */}
            <div className="inputBx gap">
              <Button
                style={{
                  backgroundColor: "#000",
                  width: "100%",
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "none",
                  fontWeight: "700",
                  borderRadius: "10px",
                }}
              >
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <span>Sign In</span>
                </Link>
              </Button>
            </div>
          </form>
          {/* FORM SECTION END */}

          <div className="account">
            <Typography
              fontFamily="'Lato', sans-serif"
              fontSize={16}
              textAlign="center"
              color="#858585"
              marginTop={1}
            >
              Don’t have an account? <span>Register here</span>
            </Typography>
          </div>
        </Box>
      </Box>
      {/* LOGIN FORM END */}
    </Box>
  );
};

export default Login;
